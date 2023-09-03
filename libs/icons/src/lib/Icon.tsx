import { Suspense, lazy, useState, useEffect } from 'react'
import styled, { Colors, PositiveSpaceUnit } from '@theme'

export type IconNames =
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
  | 'transaction'

interface IconProps {
  name: IconNames
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

export function Icon({ name, ...rest }: IconProps): JSX.Element | null {
  const [showFallback, setShowFallback] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallback(false)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const Component = lazy(() => import(`./assets/general/${name}.svg`))

  return (
    <Suspense fallback={showFallback ? <>Loading...</> : null}>
      <IconWrapper {...rest}>
        <Component />
      </IconWrapper>
    </Suspense>
  )
}
