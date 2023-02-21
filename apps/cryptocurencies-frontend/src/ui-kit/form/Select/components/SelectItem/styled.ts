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
