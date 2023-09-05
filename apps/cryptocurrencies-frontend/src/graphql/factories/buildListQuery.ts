import { DocumentNode, FieldNode } from 'graphql'
import { document, field, selectionSet, variableDefinition, variableAsArgument, query } from '.'
import { capitalize } from 'lodash'

const pageInfoSelection = selectionSet([
  field('hasNextPage'),
  field('totalCount'),
  field('nextItems'),
])

const variableArguments = [variableAsArgument('skip'), variableAsArgument('limit')]
const variableDefinitions = [
  variableDefinition('skip', 'Float', true),
  variableDefinition('limit', 'Float', true),
]

export function buildListQuery(entityName: string, fields: string[]): DocumentNode {
  const capitalizedEntityName = capitalize(entityName)

  const rootField = [
    field(
      `${entityName}s`,
      selectionSet([
        field('items', selectionSet([field('_id'), ...createEntitySelection(fields)])),
        field('pageInfo', pageInfoSelection),
      ]),
      variableArguments,
    ),
  ]

  return document(query(`${capitalizedEntityName}List`, rootField, variableDefinitions))
}

function createEntitySelection(fields: string[]): FieldNode[] {
  return fields.map((fieldName) => {
    const path = fieldName.split('.')
    if (path.length === 1) {
      return field(fieldName)
    }

    return field(path[0], selectionSet(createEntitySelection(path.slice(1))))
  })
}
