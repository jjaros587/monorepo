type Operations = 'list' | 'create' | 'edit' | 'delete'

interface EntityConfig {
  operations: Operations[]
}

export type EntityNames = 'transaction' | 'withdrawal'

export const entityConfig: { [key: string]: EntityConfig } = {
  transaction: {
    operations: ['list', 'create', 'edit', 'delete']
  },
  withdrawal: {
    operations: ['list', 'create', 'edit', 'delete']
  },
  asset: {
    operations: ['list']
  }
}
