import { useApolloClient } from '@apollo/client'
import { useListingResolver, useService } from '../hooks'
import { PaginationWithPageInfo } from '../ui-kit'
import { useEffect, useState, useCallback } from 'react'
import { OrderArgs, PageInfo } from '../graphql'
import { DocumentNodeService } from '../services/DocumentNodeService'

interface ListingState<T> {
  error: any
  loading: boolean
  items: T[]
  order?: OrderArgs
  pagination?: PaginationWithPageInfo
}

interface PagenatedResponse<T> {
  items: T[]
  pageInfo: PageInfo
}

export const useEntityListing = <T,>(entityName: string) => {
  const dnService = useService(DocumentNodeService)
  const [state, setState] = useState<ListingState<T>>({
    loading: true,
    error: null,
    items: [],
  })
  const client = useApolloClient()
  const { args, pagination, resolver } = useListingResolver(2)
  const { skip, limit, order } = args

  const fetchListing = useCallback(async () => {
    const { data, error } = await client.query<{
      [key: string]: PagenatedResponse<T>
    }>({
      query: await dnService.list(entityName),
      variables: { skip, limit, order },
    })
    const response = data[`${entityName}s`]

    setState({
      loading: false,
      items: pagination.additionalPages > 0 ? [...state.items, ...response.items] : response.items,
      error,
      order,
      pagination: { ...pagination, ...response.pageInfo },
    })
  }, [skip, limit, order])

  useEffect(() => {
    fetchListing()
  }, [skip, limit, order])

  return {
    state,
    resolver,
  }
}
