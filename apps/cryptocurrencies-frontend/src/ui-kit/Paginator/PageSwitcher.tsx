import { useDependentState } from '@hooks'
import styled from '@theme'
import { IconButton, PaginationWithPageInfo, TextInput } from '..'
import { Text, Inline } from '@ui'

const PageInput = styled(TextInput)`
  width: 20px;
  height: 20px;
  & > input {
    text-align: center;
  }
`

export const PageSwitcher = ({ pagination }: { pagination: PaginationWithPageInfo }) => {
  const { hasNextPage, totalCount, pageSize, pageNumber, setPreviousPage, setNextPage, setPage } =
    pagination
  const hasPreviousPage = pageNumber > 1
  const totalPages = Math.ceil(totalCount / pageSize)

  const [value, setValue] = useDependentState<number>(pageNumber, [pageNumber])

  const validateRange = (value: number): number => Math.min(Math.max(1, value), totalPages)
  return (
    <Inline gap="XS">
      <IconButton icon="arrowLeft" onClick={setPreviousPage} disabled={!hasPreviousPage} />
      <div>
        <PageInput
          value={value}
          onChange={(e) => {
            const value = Number(e.target.value)
            setValue(isNaN(value) ? 1 : value)
          }}
          onBlur={() => {
            const page = validateRange(value)
            if (page !== value) {
              setValue(page)
            }
            setPage(page)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              const page = validateRange(value)
              if (page !== value) {
                setValue(page)
              }
              setPage(page)
            }
          }}
        />
        <Text>
          {'\u00A0'}of{'\u00A0'}
          {totalPages}
        </Text>
      </div>
      <IconButton icon="arrowRight" onClick={setNextPage} disabled={!hasNextPage} />
    </Inline>
  )
}
