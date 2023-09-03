import { PageInfo } from '../types'

export function getPageInfo(skip: number, limit: number, totalCount: number): PageInfo {
  const nextItems = totalCount - (skip + limit)

  return {
    hasNextPage: nextItems > 0,
    totalCount,
    nextItems: nextItems < limit ? nextItems : limit,
  }
}
