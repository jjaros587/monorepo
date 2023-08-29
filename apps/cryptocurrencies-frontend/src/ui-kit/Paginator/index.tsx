import { Button, Inline } from '@ui'
import { PageInfo } from '../../graphql'
import styled from '@theme'
import { PageSwitcher } from './PageSwitcher'

const Container = styled(Inline)`
  border-top: 1px solid ${(p) => p.theme.colors.primary};
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  ${(p) => p.theme.font.body()};
  ${(p) => p.theme.padding('XS')};
`

export interface Pagination {
  setPage: (pageNumber: number) => void
  setPageSize: (pageSize: number) => void
  setPreviousPage: () => void
  setNextPage: () => void
  loadMore: (pageSize: number) => void
  pageSize: number
  pageNumber: number
  additionalPages: number
}

export type PaginationWithPageInfo = Pagination & PageInfo

export const Paginator = ({ pagination }: { pagination: PaginationWithPageInfo }) => {
  const { pageSize, pageNumber, additionalPages, hasNextPage, nextItems, totalCount, loadMore } =
    pagination

  const from = (pageNumber - 1) * pageSize + 1
  const to = (pageNumber + additionalPages) * pageSize

  return (
    <Container align="space-between" alignY="center">
      <PageSwitcher pagination={pagination} />
      <Button variant="link" disabled={!hasNextPage} onClick={() => loadMore(pageSize + 2)}>
        {hasNextPage ? `Load ${nextItems} more ${nextItems === 1 ? 'item' : 'items'}` : 'Load more'}
      </Button>
      <div>
        {from}-{to > totalCount ? totalCount : to} from {totalCount}
      </div>
    </Container>
  )
}
