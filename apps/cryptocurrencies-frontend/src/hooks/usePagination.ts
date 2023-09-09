import { useState } from 'react'

interface Props {
  page?: number
  size?: number
}

export const usePagination = ({ page: _page, size: _size }: Props) => {
  const [page, setPage] = useState(_page || 1)
  const [additionalPages, setAdditionalPage] = useState(0)
  const [size, setSize] = useState(_size || 10)

  return {
    pageSize: size,
    pageNumber: page,
    additionalPages,
    loadMore: () => setAdditionalPage(additionalPages + 1),
    setPageSize: (limit: number) => setSize(limit),
    setPage: (pageNumber: number) => {
      setPage(pageNumber)
      setAdditionalPage(0)
    },
    setNextPage: () => {
      setPage(page + additionalPages + 1)
      setAdditionalPage(0)
    },
    setPreviousPage: () => {
      setPage(page - 1)
      setAdditionalPage(0)
    },
    reset: () => {
      setAdditionalPage(0)
      setPage(1)
    },
  }
}
