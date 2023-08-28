import styled, { Colors, css, PositiveSpaceUnit, Theme, ThemeProps } from '@theme'
import { Align, AlignY } from './types'

interface Props {
  padding?: PositiveSpaceUnit
  paddingX?: PositiveSpaceUnit
  paddingY?: PositiveSpaceUnit
  paddingTop?: PositiveSpaceUnit
  paddingRight?: PositiveSpaceUnit
  paddingBottom?: PositiveSpaceUnit
  paddingLeft?: PositiveSpaceUnit
  margin?: PositiveSpaceUnit
  marginX?: PositiveSpaceUnit
  marginY?: PositiveSpaceUnit
  marginTop?: PositiveSpaceUnit
  marginRight?: PositiveSpaceUnit
  marginBottom?: PositiveSpaceUnit
  marginLeft?: PositiveSpaceUnit
  backgroundColor?: Colors
  alignY?: AlignY
  align?: Align
  fullScreen?: boolean
  alignSelf?: Align
  alignYSelf?: AlignY
}

export const Box = styled.div<Props>`
  ${(p) => getPadding(p)};
  ${(p) => getMargin(p)};

  ${(p) =>
    p.backgroundColor &&
    css`
      background-color: ${p.theme.colors[p.backgroundColor]};
    `};

  ${(p) =>
    (p.align || p.alignY) &&
    css`
      display: flex;
      flex-grow: 1;
      flex-flow: column;
      align-items: ${p.align};
      justify-content: ${p.alignY};
    `}

  justify-self: ${(p) => p.alignSelf};
  align-self: ${(p) => p.alignYSelf};

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      width: 100vw;
      height: 100vh;
    `}
`

function getPadding(p: ThemeProps<Theme> & Props) {
  const getVal = (value?: PositiveSpaceUnit | undefined): string =>
    value ? p.theme.spacing[value] : '0'

  return css`
    padding-top: ${getVal(p.paddingTop || p.paddingY || p.padding)};
    padding-right: ${getVal(p.paddingRight || p.paddingX || p.padding)};
    padding-bottom: ${getVal(p.paddingBottom || p.paddingY || p.padding)};
    padding-left: ${getVal(p.paddingLeft || p.paddingX || p.padding)};
  `
}

function getMargin(p: ThemeProps<Theme> & Props) {
  const getVal = (value?: PositiveSpaceUnit | undefined): string =>
    value ? p.theme.spacing[value] : '0'

  return css`
    margin-top: ${getVal(p.marginTop || p.marginX || p.margin)};
    margin-right: ${getVal(p.marginRight || p.marginY || p.margin)};
    margin-bottom: ${getVal(p.marginBottom || p.marginX || p.margin)};
    margin-left: ${getVal(p.marginLeft || p.marginY || p.margin)};
  `
}
