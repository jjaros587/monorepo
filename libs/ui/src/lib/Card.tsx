import { ReactNode } from 'react'
import styled, { PositiveLayoutSpaceUnit, css } from '@theme'
import { Text } from './Text'
import { Box } from './layout'

interface Props {
  size?: PositiveLayoutSpaceUnit
  title?: string
  children?: ReactNode
  glassmorphic?: boolean
}

function hexToRgb(hex: string, opacity?: number) {
  hex = hex.replace(/^#/, '')
  const bigint = parseInt(hex, 16)

  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `rgba(${r}, ${g}, ${b}, ${opacity || 1})`
}

const CardBase = styled(Box)<Props>`
  position: relative;
  border-radius: 12px;
  width: ${(p) => p.theme.layoutSpacing[p.size || 'auto']};
  /* box-shadow: 0 0 0.75rem 0 rgba(255, 255, 255, 0.15); */
  height: auto;

  background: ${(p) =>
    p.glassmorphic
      ? css`
          ${hexToRgb(p.theme.colors.surface, 0.6)}
        `
      : p.theme.colors.surface};
`

export const Card: React.FC<Props> = ({ children, title, size, glassmorphic }) => {
  return (
    <CardBase size={size} padding="XL" glassmorphic={glassmorphic}>
      {title && (
        <Box paddingBottom="S">
          <Text variant="headline2">{title}</Text>
        </Box>
      )}
      {children}
    </CardBase>
  )
}
