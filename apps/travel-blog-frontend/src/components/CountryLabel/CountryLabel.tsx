import styled, { css } from '@theme'
import { FC } from 'react'
import { CountryIcon } from '../CountryIcon/CountryIcon'
import { Inline, Text } from '@ui'
import { HoverObserver } from './HoverObserver'
import { Country } from '@contentlayer/generated'
import { IconCountryFlag } from '@icons'

type Size = 'small' | 'big'

const TextContainer = styled.div<{ size: Size }>`
  background-color: ${(p) => p.theme.colors.primary};

  ${({ size }) =>
    size === 'small'
      ? css`
          margin-left: -5px;
          padding: 2px 5px;
          padding-left: 10px;
        `
      : css`
          margin-left: -10px;

          padding: 4px 5px;
          padding-left: 20px;
        `}
`

const Container = styled.div<{ isInteractive?: boolean }>`
  cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : undefined)};
`

interface Props {
  country: Country
  size?: Size
  isInteractive?: boolean
}

export const CountryLabel: FC<Props> = ({ country, size = 'small', isInteractive }) => {
  const iconSize = size === 'big' ? '50px' : undefined
  const textVariant = size === 'big' ? 'display' : 'bodyMedium'

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
            {/* <IconCountryFlag code={country.code} /> */}
            <TextContainer color="light" size={size}>
              <Text variant={'headline1'} color="light">
                {country.name}
              </Text>
            </TextContainer>
          </Inline>
        </Container>
      )}
    </HoverObserver>
  )
}
