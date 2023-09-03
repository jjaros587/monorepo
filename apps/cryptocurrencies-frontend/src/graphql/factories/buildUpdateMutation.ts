import { capitalize } from 'lodash'
import { document, variableAsArgument, field, selectionSet, mutation, variableDefinition } from '.'

export function buildUpdateMutation(entityName: string) {
  const capitalizedEntityName = capitalize(entityName)
  const rootField = [
    field(`${entityName}Update`, selectionSet([field('success')]), [
      variableAsArgument('_id'),
      variableAsArgument('patch'),
    ]),
  ]

  return document(
    mutation(`Update${capitalizedEntityName}`, rootField, [
      variableDefinition('patch', `${capitalizedEntityName}New!`),
    ]),
  )
}
