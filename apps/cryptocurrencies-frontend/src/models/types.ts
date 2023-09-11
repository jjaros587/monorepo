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

export interface ListingResponse<T> {
  pageInfo: PageInfo
  items: T[]
}

export type ListingQuery<T> = (args: ListingArgs) => Promise<ListingResponse<T>>
