import { registerEnumType } from 'type-graphql'

export enum TransactionTypes {
  BOUGHT = 'BOUGHT',
  SOLD = 'SOLD',
  RECEIVED = 'RECEIVED',
  SENT = 'SENT'
}

export enum OrderDirection {
  Asc = '1',
  Desc = '-1'
}

registerEnumType(TransactionTypes, {
  name: 'TransactionTypes'
})

registerEnumType(OrderDirection, {
  name: 'OrderDirection'
})
