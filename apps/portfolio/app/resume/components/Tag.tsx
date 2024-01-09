import styled from '@theme'
import { Box, Text } from '@ui'
import { FC } from 'react'

interface Props {
  value: string
}

const StyledTag = styled(Box)`
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: 25px;
`

export const Tag: FC<Props> = ({ value }) => {
  return (
    <StyledTag paddingX="M">
      <Text color="light">{value}</Text>
    </StyledTag>
  )
}
