import { TableRow } from './components/Row'
import { TableHeader } from './components/Header'
import * as S from './Table.styled'
import { TableProps } from './types'

export const Table = <T extends { _id: string }>({ data, ...rest }: TableProps<T>) => {
  return (
    <S.Table>
      <thead>
        <TableHeader<T> data={data} {...rest} />
      </thead>

      <tbody>
        {data.map((rowData) => (
          <TableRow<T> key={rowData._id} rowData={rowData} {...rest} />
        ))}
      </tbody>
    </S.Table>
  )
}
