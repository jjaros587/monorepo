import { TableRow } from './TableRow'
import { TableHeader } from './TableHeader'
import * as S from './styled'
import { TableProps } from './types'

export const Table = <T extends { _id: string }>({ data, ...rest }: TableProps<T>) => {
  return (
    <S.Table>
      <thead>
        <TableHeader<T> data={data} {...rest} />
      </thead>

      <tbody>
        {data.map((rowData, index) => (
          <TableRow<T> key={index} rowData={rowData} {...rest} />
        ))}
      </tbody>
    </S.Table>
  )
}
