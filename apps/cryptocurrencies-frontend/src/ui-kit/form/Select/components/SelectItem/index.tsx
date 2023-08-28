import { SelectItemProps } from '../../types'
import * as S from './styled'

interface Props {
  item: SelectItemProps
  isActive: boolean
  getItemProps: () => any
}

export const SelectItem = ({ item, isActive, getItemProps }: Props) => {
  return (
    <S.StyledSelectItem {...getItemProps()} isActive={isActive}>
      {item.label}
    </S.StyledSelectItem>
  )
}
