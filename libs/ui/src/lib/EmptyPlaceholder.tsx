import { Box } from './layout'
import { Text } from './Text'
import { Icon, IconNames } from '@icons'
import styled from '@theme'

const Container = styled(Box)`
  border-top: 1px solid ${(p) => p.theme.colors.primary};
  border-bottom: 1px solid ${(p) => p.theme.colors.primary};
  text-align: center;
`

interface Props {
  title?: string
  description?: string
  icon?: IconNames
}

export const EmptyPlaceholder = ({ title, description, icon }: Props) => {
  return (
    <Container padding="XXL">
      {icon && (
        <Box paddingBottom="L">
          <Icon name={icon} size="XXL" color={'display'} />
        </Box>
      )}
      <Box paddingBottom="M">
        <Text variant="display">{title}</Text>
      </Box>
      <Text>{description}</Text>
    </Container>
  )
}
