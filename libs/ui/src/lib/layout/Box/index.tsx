'use client';

import styled, {
  Colors,
  css,
  PositiveSpaceUnit,
  Theme,
  ThemeProps,
} from '@theme';
import { Align, AlignY } from '../types';

interface Props {
  padding?: PositiveSpaceUnit;
  paddingX?: PositiveSpaceUnit;
  paddingY?: PositiveSpaceUnit;
  paddingTop?: PositiveSpaceUnit;
  paddingRight?: PositiveSpaceUnit;
  paddingBottom?: PositiveSpaceUnit;
  paddingLeft?: PositiveSpaceUnit;
  backgroundColor?: Colors;
  alignY?: AlignY;
  align?: Align;
  fullScreen?: boolean;
}

export const Box = styled.div<Props>`
  ${(p) => getPadding(p)};
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

  ${({ fullScreen }) =>
    fullScreen &&
    css`
      width: 100vw;
      height: 100vh;
    `}
`;

function getPadding(p: ThemeProps<Theme> & Props) {
  const getVal = (value?: PositiveSpaceUnit | undefined): string =>
    value ? p.theme.spacing[value] : '0';

  return css`
    padding-top: ${getVal(p.paddingTop || p.paddingX || p.padding)};
    padding-right: ${getVal(p.paddingRight || p.paddingY || p.padding)};
    padding-bottom: ${getVal(p.paddingBottom || p.paddingX || p.padding)};
    padding-left: ${getVal(p.paddingLeft || p.paddingY || p.padding)};
  `;
}
