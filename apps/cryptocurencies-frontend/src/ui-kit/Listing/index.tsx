import { Table } from '../Table'
import { ColumnDescriptor } from '../Table/types'
import { LoadingPlaceholder, PaginationWithPageInfo, Paginator } from '@ui'
import { EmptyPlaceholder } from '../EmptyPlaceholder'
import { ListingState } from './types'
import { OrderArgs } from 'src/graphql'

interface Props<T extends { _id: string }> {
  columns: ColumnDescriptor<T>[]
  listingState: ListingState<T>
  emptyStatePlaceholder?: JSX.Element
  pagination?: PaginationWithPageInfo
  setOrder?: (order: OrderArgs) => void
}

export const Listing = <T extends { _id: string }>(props: Props<T>) => {
  const { listingState, pagination, emptyStatePlaceholder, ...rest } = props
  const { loading, error, items, order } = listingState

  // if (error) {
  //   return (
  //     <>
  //       {error.graphQLErrors.map((error) => (
  //         <p>{error.message}</p>
  //       ))}
  //     </>
  //   )
  // }

  return (
    <LoadingPlaceholder isLoading={loading}>
      {items.length === 0 ? (
        emptyStatePlaceholder || (
          <EmptyPlaceholder icon="fileEmpty" title="No data" description="No data were found on the server" />
        )
      ) : (
        <>
          <Table<T> data={items} order={order} {...rest} />
          {pagination && <Paginator pagination={pagination} />}
        </>
      )}
    </LoadingPlaceholder>
  )
}
