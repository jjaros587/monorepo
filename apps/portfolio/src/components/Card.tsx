import styled, { css } from '@theme'
import { ReactFCWithChildren, Box, Text } from '@ui'

interface Props {
  title?: string
  fullHeight?: boolean
}

const StyledCard = styled(Box)<{ fullHeight?: boolean }>`
  ${(p) =>
    p.fullHeight &&
    css`
      height: 100%;
    `}
`

export const Card: ReactFCWithChildren<Props> = ({ title, fullHeight, children }) => {
  return (
    <StyledCard padding="L" backgroundColor="surface" fullHeight={fullHeight}>
      {title ? (
        <Box paddingBottom="S">
          <Text variant="headline3" color="light">
            {title}
          </Text>
        </Box>
      ) : null}
      {children}
    </StyledCard>
  )
}
