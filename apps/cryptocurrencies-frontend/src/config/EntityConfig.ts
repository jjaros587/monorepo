export type Operations = 'list' | 'create' | 'edit' | 'delete'
export type EntityNames = 'transaction' | 'withdrawal' | 'asset' | 'wallet'

interface EntityConfig {
  operations: Operations[]
}

export const entityConfig: { [key in EntityNames]: EntityConfig } = {
  transaction: {
    operations: ['list', 'create', 'edit', 'delete'],
  },
  withdrawal: {
    operations: ['list', 'create', 'edit', 'delete'],
  },
  asset: {
    operations: ['list'],
  },
  wallet: {
    operations: ['list'],
  },
}
