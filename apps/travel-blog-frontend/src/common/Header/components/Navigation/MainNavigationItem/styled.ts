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

export const MainNavigationLinkDropdown = styled.div`
  background-color: #333333;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 1000px;
`;

export const Wrapper = styled(Box)<{ selected: boolean }>`
  padding: 0 20px;

  height: 75px;
  position: relative;
  :hover ${MainNavigationLinkDropdown} {
    display: block;
  }

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: 2px solid #0070f3;
    `}
`;
