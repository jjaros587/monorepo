import { ColumnDescriptor, TableHeaderProps } from './types'
import * as S from './styled'
import { Icon } from '..'
import { OrderArgs, OrderDirection } from '../../graphql'
import { capitalize } from 'lodash'
import { Inline } from '@ui'

const OrderIcon = ({
  order,
  column,
  setOrder,
}: {
  order?: OrderArgs
  column: ColumnDescriptor
  setOrder?: (order: OrderArgs) => void
}) => {
  if (!column.sortable || !setOrder) {
    return null
  }

  return (
    <Icon
      size="M"
      color={column.key !== order?.orderBy ? 'disabled' : undefined}
      name={order?.orderDirection === OrderDirection.Asc ? 'sortUp' : 'sortDown'}
      onClick={() =>
        setOrder({
          orderBy: column.key,
          orderDirection:
            order?.orderDirection === OrderDirection.Asc ? OrderDirection.Desc : OrderDirection.Asc,
        })
      }
    />
  )
}

export const TableHeader = <T extends { _id: string }>({
  data,
  columns,
  order,
  setOrder,
}: TableHeaderProps<T>) => {
  const isMetaColumn = (key: string) => {
    return key.startsWith('__')
  }

  return (
    <S.HeaderRow>
      {columns.map((column, index) => {
        return (
          <S.HeaderCell key={`${column.key}_headCell_${index}`}>
            <Inline gap="S" align="center" alignY="center">
              {!isMetaColumn(column.key) && (column.header || capitalize(column.key))}
              <OrderIcon order={order} column={column} setOrder={setOrder} />
            </Inline>
          </S.HeaderCell>
        )
      })}
    </S.HeaderRow>
  )
}
