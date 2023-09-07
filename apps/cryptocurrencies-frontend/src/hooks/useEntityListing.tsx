import { useListingResolver, useService } from '../hooks'
import { PaginationWithPageInfo } from '../ui-kit'
import { useEffect, useState, useCallback } from 'react'
import { OrderArgs } from '../graphql'
import { EntityManagerService } from '../services'

interface ListingState<T> {
  error: any
  loading: boolean
  items: T[]
  order?: OrderArgs
  pagination?: PaginationWithPageInfo
}

export const useEntityListing = <T,>(
  entityName: string,
  properties: string[],
  pageSize?: number,
) => {
  const entityManager = useService(EntityManagerService)
  const [state, setState] = useState<ListingState<T>>({
    loading: true,
    error: null,
    items: [],
  })
  const { args, pagination, resolver } = useListingResolver(pageSize)
  const { skip, limit, order } = args

  const fetchListing = useCallback(async () => {
    const { data, error } = await entityManager.fetchEntities<T>(entityName, properties, {
      skip,
      limit,
      order,
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
