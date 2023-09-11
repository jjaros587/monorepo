import {
  ArgumentNode,
  DefinitionNode,
  DirectiveNode,
  DocumentNode,
  FieldNode,
  ListTypeNode,
  NamedTypeNode,
  ObjectValueNode,
  SelectionNode,
  SelectionSetNode,
  TypeNode,
  ValueNode,
  VariableDefinitionNode,
  VariableNode,
} from 'graphql'
import map from 'lodash/map'

export function field(
  name: string,
  selectionSet?: SelectionSetNode,
  args?: ArgumentNode[],
  alias?: string,
): FieldNode {
  return {
    kind: 'Field',
    name: {
      kind: 'Name',
      value: name,
    },
    selectionSet,
    arguments: args,
    alias:
      alias && alias !== name
        ? {
            kind: 'Name',
            value: alias,
          }
        : undefined,
  }
}

export function selectionSet(selections: readonly SelectionNode[]): SelectionSetNode {
  return {
    kind: 'SelectionSet',
    selections,
  }
}

export function argument(argName: string, value: ValueNode): ArgumentNode {
  return {
    kind: 'Argument',
    name: {
      kind: 'Name',
      value: argName,
    },
    value,
  }
}

export function variable(varName: string): VariableNode {
  return {
    kind: 'Variable',
    name: {
      kind: 'Name',
      value: varName,
    },
  }
}

export function variableAsArgument(argName: string, varName?: string): ArgumentNode {
  return argument(argName, variable(varName || argName))
}

export const enum TransactionKind {
  Commit = 'COMMIT',
  DryRun = 'DRY_RUN',
}

export function objectValue(dict: { [k: string]: ValueNode }): ObjectValueNode {
  return {
    kind: 'ObjectValue',
    fields: map(dict, (value, key) => {
      return {
        kind: 'ObjectField',
        name: {
          kind: 'Name',
          value: key,
        },
        value,
      }
    }),
  }
}

const RX_NON_NULL_TYPE = /(.+)!$/
const RX_LIST_TYPE = /^\[(.+)\]$/

function type(typeName: string): TypeNode {
  let m = typeName.match(RX_NON_NULL_TYPE)
  if (m) {
    return {
      kind: 'NonNullType',
      type: type(m[1]) as NamedTypeNode | ListTypeNode,
    }
  }

  m = typeName.match(RX_LIST_TYPE)
  if (m) {
    return {
      kind: 'ListType',
      type: type(m[1]),
    }
  }

  return {
    kind: 'NamedType',
    name: {
      kind: 'Name',
      value: typeName,
    },
  }
}

export function variableDefinition(
  varName: string,
  typeName: string,
  nullable = false,
): VariableDefinitionNode {
  return {
    kind: 'VariableDefinition',
    variable: {
      kind: 'Variable',
      name: {
        kind: 'Name',
        value: varName,
      },
    },
    type: type(!nullable && !RX_NON_NULL_TYPE.exec(typeName) ? `${typeName}!` : typeName),
  }
}

export function document(definitions: DefinitionNode | DefinitionNode[]): DocumentNode {
  return {
    kind: 'Document',
    definitions: Array.isArray(definitions) ? definitions : [definitions],
  }
}

export function query(
  name: string | undefined,
  selections: SelectionNode[],
  variableDefinitions?: VariableDefinitionNode[],
): DefinitionNode {
  return {
    kind: 'OperationDefinition',
    operation: 'query',
    name:
      name === undefined
        ? undefined
        : {
            kind: 'Name',
            value: name,
          },
    variableDefinitions,
    selectionSet: {
      kind: 'SelectionSet',
      selections,
    },
  }
}

export function mutation(
  name: string,
  selections: SelectionNode[],
  variableDefinitions?: VariableDefinitionNode[],
  directives?: DirectiveNode[],
): DefinitionNode {
  return {
    kind: 'OperationDefinition',
    operation: 'mutation',
    name: {
      kind: 'Name',
      value: name,
    },
    variableDefinitions,
    directives: directives,
    selectionSet: {
      kind: 'SelectionSet',
      selections,
    },
  }
}
