import { registerEnumType } from 'type-graphql'

export enum TransactionTypes {
  BOUGHT = 'BOUGHT',
  SOLD = 'SOLD',
  RECEIVED = 'RECEIVED',
  SENT = 'SENT',
}

export enum OrderDirection {
  Asc = 'Asc',
  Desc = 'Desc',
}

registerEnumType(TransactionTypes, {
  name: 'TransactionTypes',
})

registerEnumType(OrderDirection, {
  name: 'OrderDirection',
})
