import styled, { css } from '@theme';
import { FC } from 'react';
import { CountryIcon } from '@components';
import { Inline, Text } from '@ui';
import { Country } from '@graphql';
import { HoverObserver } from './HoverObserver';
// import { IconCountryFlag } from '@icons';

type Size = 'small' | 'big';

const TextContainer = styled(Text)<{ size: Size }>`
  background-color: ${(p) => p.theme.colors.primary};

  ${({ size }) =>
    size === 'small'
      ? css`
          margin: -5px;
          padding: 2px 5px;
          padding-left: 10px;
        `
      : css`
          margin: -10px;
          padding: 4px 10px;
          padding-left: 20px;
        `}
`;

const Container = styled.div<{ isInteractive?: boolean }>`
  cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : undefined)};
`;

interface Props {
  country: Country;
  size?: Size;
  isInteractive?: boolean;
}

export const CountryLabel: FC<Props> = ({
  country,
  size = 'small',
  isInteractive,
}) => {
  const iconSize = size === 'big' ? '50px' : undefined;
  const textVariant = size === 'big' ? 'display' : 'bodyMedium';

  return (
    <HoverObserver>
      {({ isHovered }) => (
        <Container isInteractive={isInteractive}>
          <Inline alignY="center">
            <CountryIcon
              code={country.code}
              isHovered={isInteractive && isHovered}
              size={iconSize}
            />
            <TextContainer variant={textVariant} color="light" size={size}>
              {country.name}
            </TextContainer>
          </Inline>
        </Container>
      )}
    </HoverObserver>
  );
};
