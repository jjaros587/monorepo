import { useService } from '../hooks'
import { PaginationWithPageInfo } from '../ui-kit'
import { useEffect, useMemo } from 'react'
import { OrderArgs } from '../graphql'
import { EntityManagerService } from '../services'
import { ListingModel } from '../models/ListingModel'
import { ListingOpts } from '../models/types'

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
  opts?: ListingOpts,
) => {
  const entityManager = useService(EntityManagerService)

  const listing = useMemo(() => {
    return new ListingModel(entityManager.fetchEntities<T>(entityName, properties), opts)
  }, [entityName, properties, opts, entityManager])

  useEffect(() => {
    const fetch = async () => {
      listing.fetchItems()
    }
    fetch()
  }, [listing])

  return listing
}
