import { capitalize } from 'lodash'
import { document, variableAsArgument, field, selectionSet, mutation, variableDefinition } from '.'

export function buildCreateMutation(entityName: string) {
  const capitalizedEntityName = capitalize(entityName)
  const rootField = [field(`${entityName}Create`, selectionSet([field('success')]), [variableAsArgument('new')])]
  return document(
    mutation(`Create${capitalizedEntityName}`, rootField, [
      variableDefinition('new', `${capitalizedEntityName}InputTypeCreate!`)
    ])
  )
}
