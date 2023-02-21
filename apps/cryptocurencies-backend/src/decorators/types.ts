import { RecursiveArray } from 'lodash'
import { GraphQLScalarType } from 'graphql'
import { ClassType } from 'type-graphql'

export type MetadataStorage = {
  inputs: InputsCollectionType[]
}

export type InputsCollectionType = {
  target: Function
  field: string | symbol
  returnTypeFunc?: ReturnTypeFunc
  editable: boolean
}

export type ReturnTypeFunc = (type?: void) => ClassType | GraphQLScalarType | Function | object | symbol
