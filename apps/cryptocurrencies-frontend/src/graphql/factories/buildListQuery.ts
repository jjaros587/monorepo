import { DocumentNode } from 'graphql'
import { document, argument, field, mutation, selectionSet, variable, variableDefinition } from '.'

export function buildListQuery(entityName: string): DocumentNode {
  const rootFieldName = `${entityName}Delete`
  const arg = argument('_id', variable('_id'))
  const rootField = [field(rootFieldName, selectionSet([field('success')]), [arg])]
  return document(mutation('DeleteMutation', rootField, [variableDefinition('_id', 'String!')]))
}
