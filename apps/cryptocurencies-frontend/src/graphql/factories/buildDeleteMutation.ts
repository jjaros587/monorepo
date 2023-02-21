import { variableAsArgument, document, field, mutation, selectionSet, variableDefinition } from './index'
import { DocumentNode } from 'graphql'

export function buildDeleteMutation(entityName: string): DocumentNode {
  const rootFieldName = `${entityName}Delete`
  const rootField = [field(rootFieldName, selectionSet([field('success')]), [variableAsArgument('_id')])]
  return document(mutation('DeleteMutation', rootField, [variableDefinition('_id', 'String!')]))
}
