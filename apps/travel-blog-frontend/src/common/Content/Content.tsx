'use client';

import { Inline } from '@ui';
import styled from 'styled-components';
import { SidePanel } from '../SidePanel/SidePanel';

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  top: 75px;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="contentWrapper">
        <Inline gap="M" noWrap>
          <Inline.Item flexGrow>{children}</Inline.Item>
          <Inline.Item>
            <SidePanel />
          </Inline.Item>
        </Inline>
      </div>
    </Container>
  );
};
