import React, { Suspense } from 'react'
import styled, { Colors, PositiveSpaceUnit } from '@theme'

type IconCryptoNames = 'bitcoin' | 'ethereum' | 'litecoin'

export type IconNames =
  | IconCryptoNames
  | 'user'
  | 'userSettings'
  | 'logout'
  | 'login'
  | 'arrowDoubleLeft'
  | 'arrowDoubleRight'
  | 'kebab'
  | 'dollar'
  | 'chartPie'
  | 'chartLine'
  | 'pageNotFound'
  | 'close'
  | 'caretDown'
  | 'caretUp'
  | 'add'
  | 'fileEmpty'
  | 'arrowLeft'
  | 'arrowRight'
  | 'handHoldingUsd'
  | 'menuHamburger'
  | 'spinner'
  | 'sortUp'
  | 'sortDown'

interface IconProps {
  name: IconNames
  color?: Colors
  size?: PositiveSpaceUnit
  onClick?: () => void
}

interface IconCryptoProps extends IconProps {
  name: IconCryptoNames
}

const IconWrapper = styled.span<{ color?: Colors; size?: PositiveSpaceUnit }>`
  display: inline-block;
  line-height: 0;
  box-sizing: border-box;
  vertical-align: middle;
  & > svg {
    fill: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.Icon)};
    width: ${(p) => (p.size ? p.theme.spacing[p.size] : '30px')};
    height: ${(p) => (p.size ? p.theme.spacing[p.size] : '30px')};
  }
`

export function Icon({ name, ...rest }: IconProps): JSX.Element | null {
  const Component = React.lazy(() => import(`./assets/${name}.svg`))

  return (
    <Suspense fallback={<></>}>
      <IconWrapper {...rest}>
        <Component />
      </IconWrapper>
    </Suspense>
  )
}

export function IconCrypto({ name, color, size, onClick }: IconProps): JSX.Element | null {
  const Component = React.lazy(() => import(`./assets/crypto/${name}.svg`))

  return (
    <Suspense fallback={<></>}>
      <IconWrapper color={color} size={size} onClick={onClick}>
        <Component />
      </IconWrapper>
    </Suspense>
  )
}
