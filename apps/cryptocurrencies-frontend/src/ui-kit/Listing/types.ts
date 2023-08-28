import { PaginationWithPageInfo } from '@ui'
import { OrderArgs } from 'src/graphql'
import { NestedKeyOf } from '../Table/types'

export interface ListingState<T> {
  error: any
  loading: boolean
  items: T[]
  order?: OrderArgs
  pagination?: PaginationWithPageInfo
}

enum FilterTypes {
  Keyword,
  Date,
  Range
}
interface Filters<T extends { _id: string }> {
  key: NestedKeyOf<T>
  type: FilterTypes
}
