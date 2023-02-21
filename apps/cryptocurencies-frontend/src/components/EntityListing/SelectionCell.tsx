import { useBulkPanel } from '@hooks'
import { Checkbox } from '@ui'
import { differenceBy } from 'lodash'
import { useMemo } from 'react'

export const SelectionCell = <T extends { _id: string }>({ rowData }: { rowData: T }) => {
  const { addItem, removeItem, items } = useBulkPanel()
  const isItemSelected = useMemo(() => {
    debugger
    return Boolean(items.find((item) => item._id === rowData._id))
  }, [items])

  return <Checkbox checked={isItemSelected} onClick={() => (isItemSelected ? removeItem(rowData) : addItem(rowData))} />
}

export const SelectionCellMulti = <T extends { _id: string }>({ data }: { data: T[] }) => {
  const { items, addItems, removeItems } = useBulkPanel()

  const isItemSelected = useMemo(() => {
    const dataTest = data
    const itemsTest = items
    const difference = differenceBy(data, items, '_id').length === 0
    const result = items.length > 0 && differenceBy(data, items, '_id').length === 0
    debugger
    return items.length > 0 && differenceBy(data, items, '_id').length === 0
  }, [items, data])

  return <Checkbox checked={isItemSelected} onClick={() => (isItemSelected ? removeItems(data) : addItems(data))} />
}
