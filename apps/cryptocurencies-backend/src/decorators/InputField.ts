import { Field, InputType } from 'type-graphql'
import { getMetadataStorage } from './metadataStorage'
import { InputsCollectionType } from './types'
import { getMetadataStorage as getTypeGraphQLMetadataStorage } from 'type-graphql/dist/metadata/getMetadataStorage'
import { ReturnTypeFunc } from 'type-graphql/dist/decorators/types'
import { capitalize } from 'lodash'

type InputTypeKind = 'create' | 'edit'

/**
 * This decorator will store filters information for the field in a metadata storage.
 * We will use this metadata later on to generate an InputType for the filters argument
 *
 * @param operators
 * @param returnTypeFunction
 */
export function InputField(returnTypeFunc: ReturnTypeFunc, editable: boolean = true): PropertyDecorator {
  return (prototype, field: string | symbol) => {
    const metadataStorage = getMetadataStorage()

    metadataStorage.inputs.push({
      field,
      returnTypeFunc,
      target: prototype.constructor,
      editable
    })
  }
}

/**
 * Generate a type-graphql InputType from a @ObjectType decorated
 * class by calling the @InputType and @Field decorators
 *
 * This should be used to generate the type of the @Arg
 * decorator on the corresponding resolver.
 *
 * @param type
 */
export const createFilterType = (type: Function, kind: InputTypeKind) => {
  const metadataStorage = getMetadataStorage()
  const inputsData: InputsCollectionType[] = []
  const types: Function[] = []
  for (
    let currentType = type;
    currentType !== Object;
    currentType = Object.getPrototypeOf(currentType.prototype).constructor
  ) {
    types.push(currentType)
    inputsData.push(
      ...metadataStorage.inputs.filter((input) =>
        input.target === currentType && kind === 'edit' ? input.editable : true
      )
    )
  }

  const typeGraphQLMetadata = getTypeGraphQLMetadataStorage()
  const graphQLModel = typeGraphQLMetadata.objectTypes.find((ot) => types.includes(ot.target))
  if (!graphQLModel) {
    throw new Error(`Please decorate your class "${type}" with @ObjectType if you want to filter it`)
  }

  const InputTypeClass = class {}
  Object.defineProperty(InputTypeClass, 'name', { value: `${graphQLModel.name}InputType${capitalize(kind)}` })

  InputType()(InputTypeClass)

  for (const { field, returnTypeFunc } of inputsData) {
    const graphQLField = typeGraphQLMetadata.fieldResolvers.find(
      (fr) => types.includes(fr.target) && fr.methodName === field
    )
    const fieldName = graphQLField ? graphQLField.schemaName : field
    Field(returnTypeFunc, { nullable: true })(InputTypeClass.prototype, fieldName)
  }

  return InputTypeClass
}

export const generateInputType = (type: Function, kind: InputTypeKind) => {
  const t = createFilterType(type, kind)
  return () => t
}
