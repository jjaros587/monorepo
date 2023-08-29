import styled, { Colors, PositiveSpaceUnit } from '@theme'
import { Suspense, lazy } from 'react'

type IconCryptoNames = 'bitcoin' | 'ethereum' | 'litecoin'

interface IconProps {
  name: IconCryptoNames
  color?: Colors
  size?: PositiveSpaceUnit
  onClick?: () => void
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

export function IconCrypto({ name, color, size, onClick }: IconProps): JSX.Element | null {
  const Component = lazy(() => import(`./assets/crypto/${name}.svg`))

  return (
    <Suspense fallback={<>Loading...</>}>
      <IconWrapper color={color} size={size} onClick={onClick}>
        <Component />
      </IconWrapper>
    </Suspense>
  )
}
