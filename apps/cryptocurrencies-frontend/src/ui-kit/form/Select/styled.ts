import styled, { css } from '@theme'

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  z-index: 999;

  list-style: none;
  background-color: ${(p) => p.theme.colors.background};
`

const highlightedCss = css`
  background-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.font.body('light')};
`

export const DropdownItem = styled.li<{ isSelected: boolean }>`
  list-style: none;
  cursor: pointer;

  :hover {
    ${highlightedCss}
  }

  ${(p) => p.theme.padding('XS', 'S')}
  ${(p) => p.isSelected && highlightedCss}
`
