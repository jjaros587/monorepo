import styled, { PositiveLayoutSpaceUnit } from '@theme'
import { Box, Text } from '@ui'

interface Props {
  size?: PositiveLayoutSpaceUnit
  title?: string
}

const CardBase = styled(Box)<Props>`
  position: relative;
  border-radius: 12px;
  width: ${(p) => p.theme.layoutSpacing[p.size || 'auto']};
  box-shadow: 0 0 0.75rem 0 rgba(255, 255, 255, 0.15);
  height: auto;
`

export const Card: React.FC<Props> = ({ children, title, size }) => {
  return (
    <CardBase size={size} backgroundColor={'surface'} padding="XL">
      {title && (
        <Box paddingBottom="S">
          <Text variant="headline2">{title}</Text>
        </Box>
      )}
      {children}
    </CardBase>
  )
}
