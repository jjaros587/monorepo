import { Box } from '@ui';
import Image from 'next/image';
import styled from 'styled-components';

const StyledFooter = styled(Box)`
  background-color: #80475e;
  height: 300px;
`;

export const Footer = () => {
  return (
    <footer>
      <StyledFooter align="center" alignY="center" padding="XL">
        <div className="contentWrapper">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </div>
      </StyledFooter>
    </footer>
  );
};
