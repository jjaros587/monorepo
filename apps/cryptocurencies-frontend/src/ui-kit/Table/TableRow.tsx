import get from 'lodash/get'
import { TableRowProps } from './types'
import * as S from './styled'
import { ColumnDescriptor } from '.'
import { formatTimestamp } from '@utils'

const DEFAULT_RENDERERS: { [key: string]: (value: any) => React.ReactNode } = {
  ['date']: (value: number) => <>{formatTimestamp(value)}</>
}

export const TableRow = <T extends { _id: string }>(props: TableRowProps<T>) => {
  const { rowData, columns } = props

  const getCellData = (column: ColumnDescriptor<T>) => {
    const cellData = get(rowData, column.key) ?? rowData

    const renderer = column.renderer || DEFAULT_RENDERERS[column.key]
    if (renderer) {
      return renderer(cellData)
    }
    return column.unit ? cellData + `\u00A0${column.unit}` : cellData
  }

  return (
    <S.Row key={rowData._id}>
      {columns.map((column, index) => {
        return <S.Cell key={`${column.key}_cell_${index}`}>{getCellData(column)}</S.Cell>
      })}
    </S.Row>
  )
}
