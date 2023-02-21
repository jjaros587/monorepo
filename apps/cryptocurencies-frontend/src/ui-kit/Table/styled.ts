import styled, { css } from '../../ui-theme'

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 5px 5px 0 0;
  // box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  color: white;
`

export const HeaderRow = styled.tr`
  background-color: ${(p) => p.theme.colors.primary};
`

export const Row = styled.tr`
  :hover {
    // background-color: #ddd;
    td {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`

const cellBaseCSS = css`
  // border-style: hidden !important;
  ${(p) => p.theme.padding('S', 'M')};
`

export const HeaderCell = styled.th`
  ${cellBaseCSS};
  ${(p) => p.theme.font.body('light')};
`

export const Cell = styled.td`
  ${cellBaseCSS};
  ${(p) => p.theme.font.body()};
`

export const TableActionContainer = styled.div`
  text-align: right;
  ${(p) => p.theme.padding.bottom('S')}
`
