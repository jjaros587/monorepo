import { Table } from '../Table'
import { ColumnDescriptor } from '../Table/types'
import { Paginator } from '..'
import { LoadingPlaceholder, EmptyPlaceholder } from '@ui'
import { ListingModel } from '../../models/ListingModel'
import { observer } from 'mobx-react'
import { useEffect } from 'react'

interface Props<T extends { _id: string }> {
  columns: ColumnDescriptor<T>[]
  listing: ListingModel<T>
  emptyStatePlaceholder?: JSX.Element
}

export const Listing = observer(<T extends { _id: string }>(props: Props<T>) => {
  const { emptyStatePlaceholder, listing, ...rest } = props
  const { items, pagination, isLoading, hasBeenLoaded, isEmpty } = listing

  // if (error) {
  //   return (
  //     <>
  //       {error.graphQLErrors.map((error) => (
  //         <p>{error.message}</p>
  //       ))}
  //     </>
  //   )
  // }

  // useEffect(() => {
  //   listing.fetchItems()
  // }, [listing])

  return (
    <LoadingPlaceholder isLoading={!hasBeenLoaded && isLoading}>
      {isEmpty ? (
        emptyStatePlaceholder || (
          <EmptyPlaceholder
            icon="fileEmpty"
            title="No data"
            description="No data were found on the server"
          />
        )
      ) : (
        <>
          <Table<T> data={items} order={undefined} {...rest} />
          {pagination && <Paginator pagination={pagination} />}
        </>
      )}
    </LoadingPlaceholder>
  )
})
