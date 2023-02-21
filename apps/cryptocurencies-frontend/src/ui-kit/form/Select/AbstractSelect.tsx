import { useState } from 'react'
import { SelectItem } from './components/SelectItem'
import { SelectItemProps } from './types'
import * as S from './styled'
import Downshift from 'downshift'
import { Icon, Popup, TextInput } from '@ui'

export interface SelectProps {
  items: SelectItemProps[]
  required?: boolean
  searchable?: boolean
  clearable?: boolean
  placeholder?: String
  multiselect?: boolean
  onChange: (selectedItem: unknown | null) => void
  error?: string
}

export const AbstractSelect = ({
  items,
  required = false,
  onChange,
  placeholder,
  multiselect = false,
  searchable = true,
  clearable = false,
  error
}: SelectProps) => {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <Downshift
      itemToString={(item: SelectItemProps | null) => (item ? item.label : '')}
      onChange={(item: SelectItemProps | null) => onChange(item?.value || null)}
    >
      {({
        getMenuProps,
        getInputProps,
        getRootProps,
        getItemProps,
        getToggleButtonProps,
        isOpen,
        clearSelection,
        selectedItem
      }) => (
        <S.DropdownContainer {...getRootProps()}>
          <Popup
            placement="bottom"
            popup={
              <S.DropdownList>
                {searchable && <TextInput name={'search'} onChange={(e) => setSearchValue(e.target.value)} />}
                <ul {...getMenuProps()}>
                  {items
                    .filter((item) =>
                      searchable ? item.label.toLowerCase().includes(searchValue.toLowerCase()) : true
                    )
                    .map((item, index) => (
                      <SelectItem
                        getItemProps={() =>
                          getItemProps({
                            item,
                            index
                          })
                        }
                        item={item}
                        key={index}
                        isActive={selectedItem?.value === item.value}
                      />
                    ))}
                </ul>
              </S.DropdownList>
            }
          >
            <S.DropdownHeader isOpen={isOpen} hasError={Boolean(error)} {...getToggleButtonProps()}>
              <S.DropdownTitle>{selectedItem?.label || placeholder}</S.DropdownTitle>
              <S.DropdownIconWrapper>
                {clearable && <Icon size="M" name={'close'} color={'white'} onClick={() => clearSelection()} />}
                <Icon size="M" name={isOpen ? 'caretUp' : 'caretDown'} color={'white'} />
              </S.DropdownIconWrapper>
            </S.DropdownHeader>
          </Popup>
        </S.DropdownContainer>
      )}
    </Downshift>
  )
}
