import { PageInfo } from '../types'

export function getPageInfo(skip: number, limit: number, totalCount: number): PageInfo {
  const restItems = totalCount - (skip + limit)

  return {
    hasNextPage: restItems > 0,
    totalCount,
    nextItems: limit ? (restItems < limit ? restItems : limit) : 0,
  }
}
