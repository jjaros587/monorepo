import { errorBorder, inputBaseCSS } from '../Input/styled'
import styled, { css } from '@theme'

export const DropdownContainer = styled.div`
  position: relative;

  width: 100%;
  z-index: 999;
`
export const DropdownHeader = styled.div<{ isOpen: boolean; hasError?: boolean }>`
  ${inputBaseCSS}
  display: flex;
  flex-direction: row;
  cursor: pointer;
  ${(p) =>
    p.isOpen &&
    css`
      box-shadow: 0 0 0 2px ${(p) => p.theme.colors.primary} !important;
    `}
  ${(p) => p.hasError && errorBorder}
`

export const DropdownTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1px 2px;
`

export const DropdownIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DropdownList = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
`
