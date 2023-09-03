import { GraphQLScalarType } from 'graphql'
import { Field, InputType, ClassType, ObjectType } from 'type-graphql'
import { getMetadataStorage } from 'type-graphql/dist/metadata/getMetadataStorage'

// TODO - Remove?
export function generateInputType<T>(InputTypeClass: ClassType<T>, another: string) {
  @InputType(`New${InputTypeClass.name}`, { isAbstract: true })
  class CreateInputType {}

  const fields = getMetadataStorage().fields
  //   console.log('all fields', fields)
  //   console.log(
  //     'filtered fields',
  //     fields.filter((f: any) => f.target === InputTypeClass)
  //   )

  fields
    .filter((item: any) => item.target === InputTypeClass)
    .forEach((field) => {
      console.log(field.name, field.getType(), field.target, field.params)

      //   if (field.getType() === GraphQLScalarType) {
      //     console.log(field.name, field.getType(), field.target)
      //   }
    })

  fields.push(
    ...fields
      .filter((item: any) => item.target === InputTypeClass)
      .map((item: any) => ({
        ...item,
        target: CreateInputType,
        typeOptions: { ...item.typeOptions, nullable: true },
      })),
  )

  return CreateInputType
}
