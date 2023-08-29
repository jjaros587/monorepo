import { SelectItemProps } from '../types'
import styled, { css } from '@theme'

export const StyledSelectItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  cursor: pointer;
  :hover {
    background-color: yellow;
  }
  ${(p) =>
    p.isActive &&
    css`
      background-color: blue;
    `}
`

interface Props {
  item: SelectItemProps
  isActive: boolean
  getItemProps: () => any
}

export const SelectItem = ({ item, isActive, getItemProps }: Props) => {
  return (
    <StyledSelectItem {...getItemProps()} isActive={isActive}>
      {item.label}
    </StyledSelectItem>
  )
}
