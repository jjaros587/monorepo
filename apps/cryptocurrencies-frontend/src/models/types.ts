import { OrderArgs, PageInfo } from '../graphql'

export interface ListingArgs {
  skip?: number
  limit?: number
  order?: OrderArgs
}

export interface ListingOpts {
  pageNumber?: number
  pageSize?: number
  order?: OrderArgs
}

export interface ListingState {
  pageNumber: number
  pageSize: number
  additionalPages: number
  order?: OrderArgs
}

export interface FetchResponse<T> {
  pageInfo: PageInfo
  items: T[]
}

export type FetchQuery<T> = (args: ListingArgs) => Promise<FetchResponse<T>>
