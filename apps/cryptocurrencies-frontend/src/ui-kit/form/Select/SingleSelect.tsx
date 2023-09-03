import { useCombobox } from 'downshift'
import { SelectItem } from './types'
import { TextInput } from '@ui'
import { Icon } from '@icons'
import { DropdownContainer, DropdownItem, DropdownList } from './styled'
import { useDependentState } from '@hooks'

interface SingleSelectProps {
  items: SelectItem[]
  placeholder?: string
  required?: boolean
  error?: string
  onChange: (selectedValue: unknown | null) => void
}

export const SingleSelect = (props: SingleSelectProps) => {
  const { items: initialItems, onChange, placeholder, error, required } = props
  const [items, setItems] = useDependentState(initialItems, [initialItems])

  const filter = (searchValue?: string) => {
    return function itemsFilter(item: SelectItem) {
      if (!searchValue) {
        return true
      }
      const lowerCasedInputValue = searchValue.toLowerCase()

      return !searchValue || item.label.toLowerCase().includes(lowerCasedInputValue)
    }
  }

  const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, getItemProps, getInputProps } =
    useCombobox({
      items,
      itemToString: (item: SelectItem | null) => (item ? item.label : ''),
      onInputValueChange({ inputValue }) {
        setItems(initialItems.filter(filter(inputValue)))
      },
      onSelectedItemChange: (item) => onChange(item.selectedItem?.value),
    })

  return (
    <DropdownContainer>
      <div {...getToggleButtonProps()}>
        <TextInput
          required={required}
          name={'search'}
          icon={<Icon size="M" name={isOpen ? 'caretUp' : 'caretDown'} color={'display'} />}
          {...getInputProps()}
          error={error}
        />
      </div>

      {isOpen && (
        <DropdownList {...getMenuProps()}>
          {items.map((item, index) => (
            <DropdownItem
              {...getItemProps({ item, index })}
              key={index}
              isSelected={selectedItem?.value === item.value}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  )
}
