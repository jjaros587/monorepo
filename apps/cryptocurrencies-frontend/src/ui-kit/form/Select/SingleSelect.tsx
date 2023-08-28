import { AbstractSelect } from './AbstractSelect'
import { SelectItemProps } from './types'

interface SingleSelectProps {
  items: SelectItemProps[]
  label: string
  searchable?: boolean
  clearable?: boolean
  placeholder?: string
  onChange: (selectedItem: unknown | null) => void
}

export const SingleSelect = (props: SingleSelectProps) => {
  const { items, onChange, placeholder, label, searchable = true, clearable = false } = props
  return (
    <AbstractSelect
      items={items}
      label={label}
      placeholder={placeholder}
      searchable={searchable}
      clearable={clearable}
      multiselect={false}
      onChange={onChange}
    />
  )
}
