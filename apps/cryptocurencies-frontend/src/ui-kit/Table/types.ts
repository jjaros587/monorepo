import React from 'react'
import { ActionDescriptor } from 'src/app/actions/ActionDescriptor'
import { OrderArgs } from 'src/graphql'

export type NestedKeyOf<ObjectType extends { [k: string]: unknown } = { [k: string]: unknown }> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends { [k: string]: unknown }
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

export interface ColumnDescriptor<T extends { [k: string]: unknown } = { [k: string]: unknown }> {
  key: NestedKeyOf<T> | `${'__'}${string}`
  header?: string
  unit?: string
  sortable?: boolean
  renderer?: (value: any) => React.ReactNode
}

export type SelectionRenderer<T extends { [k: string]: unknown } = { [k: string]: unknown }> = (
  rowData: T
) => React.ReactNode

export interface TableProps<T extends { [k: string]: unknown } = { [k: string]: unknown }> {
  data: T[]
  columns: ColumnDescriptor<T>[]
  order?: OrderArgs
  setOrder?: (order: OrderArgs) => void
}

export type TableHeaderProps<T extends { [k: string]: unknown } = { [k: string]: unknown }> = {
  columns: ColumnDescriptor<T>[]
  data: T[]
  order?: OrderArgs
  setOrder?: (order: OrderArgs) => void
}

export type TableRowProps<T extends { [k: string]: unknown } = { [k: string]: unknown }> = {
  rowData: T
  columns: ColumnDescriptor<T>[]
}
