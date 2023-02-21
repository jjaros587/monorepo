'use client';

import styled from '@theme';
import { Box } from '@ui';
import { Navigation } from './components/Navigation/Navigation';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;

  border-bottom: 1px solid #333;
  z-index: 1000;
`;

const GlassmorphicHeader = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #0e0e0f;
  // background-color: #121212;
  // background-color: #34344a;
  backdrop-filter: blur(14px);
  opacity: 0.75;
`;

const NavigationWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <GlassmorphicHeader />
      <NavigationWrapper align="center" alignY="center">
        <Navigation />
      </NavigationWrapper>
    </StyledHeader>
  );
};
