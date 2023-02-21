import styled from '@theme'
import { Icon, IconNames, Box, Text } from '@ui'

interface ErrorPageProps {
  title: string
  icon: IconNames
}

const Container = styled(Box)`
  position: relative;
  top: 30%;
  text-align: center;
`

export const ErrorPage = ({ title, icon }: ErrorPageProps) => {
  return (
    <Container>
      <Box paddingBottom="XXL">
        <Icon name={icon} size="XXL" color={'display'} />
      </Box>
      <Text variant="display">{title}</Text>
    </Container>
  )
}

export * from './pages/PageNotFound'
