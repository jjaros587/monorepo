import { capitalize } from 'lodash'
import { document, variableAsArgument, field, selectionSet, mutation, variableDefinition } from '.'

export function buildUpdateMutation(entityName: string) {
  const capitalizedEntityName = capitalize(entityName)
  const rootField = [
    field(`${entityName}Edit`, selectionSet([field('success')]), [
      variableAsArgument('_id'),
      variableAsArgument('patch')
    ])
  ]
  return document(
    mutation(`Edit${capitalizedEntityName}`, rootField, [
      variableDefinition('patch', `${capitalizedEntityName}InputTypeEdit!`)
    ])
  )
}
