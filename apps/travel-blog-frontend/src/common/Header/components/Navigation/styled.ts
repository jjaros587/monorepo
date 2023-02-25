'use client';

import { Box } from '@ui';
import styled, { css } from 'styled-components';

export const MainNavigationLinkCaret = styled.svg`
  fill: none;
  margin-left: 0.25em;
  path {
    stroke: currentColor;
  }
`;

export const SubNavigationPoppup = styled.div`
  display: none;
  position: absolute;

  left: 0px;
  right: 0px;
  top 75px;

  // float: left;
  // overflow: hidden;
`;

export const SubNavigation = styled.div`
  // float: left;
  // overflow: hidden;
  :hover {
    ${SubNavigationPoppup} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const SubNavigationContent = styled.div`
  background-color: #333333;
`;

export const Wrapper = styled(Box)<{ selected: boolean }>`
  padding: 0 20px;
  height: 75px;

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 2px solid #0070f3;
    `}
`;
