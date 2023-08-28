import { AbstractSelect } from './AbstractSelect'
import { SelectItemProps } from './types'

interface MultiSelectProps {
  items: SelectItemProps[]
  label: string
  searchable?: boolean
  clearable?: boolean
  placeholder?: string
  onChange: (selectedItem: unknown | null) => void
}

export const MultiSelect = (props: MultiSelectProps) => {
  const { items, onChange, label, placeholder, searchable = true, clearable = false } = props
  return (
    <AbstractSelect
      items={items}
      // label={label}
      placeholder={placeholder}
      searchable={searchable}
      clearable={clearable}
      multiselect={false}
      onChange={onChange}
    />
  )
}
