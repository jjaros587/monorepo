import {
  variableAsArgument,
  document,
  field,
  mutation,
  selectionSet,
  variableDefinition,
} from './index'
import { DocumentNode } from 'graphql'
import { capitalize } from 'lodash'

export function buildDeleteMutation(entityName: string): DocumentNode {
  const capitalizedEntityName = capitalize(entityName)
  const rootField = [
    field(`${entityName}Delete`, selectionSet([field('success')]), [variableAsArgument('_id')]),
  ]

  return document(
    mutation(`Delete${capitalizedEntityName}`, rootField, [variableDefinition('_id', 'String!')]),
  )
}
