import styled, { css, keyframes } from '@theme'
import { Icon, Box } from '@ui'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled(Icon).attrs({ name: 'spinner', size: 'L' })`
  animation: ${rotate360} 700ms linear infinite;
`

export const LoadingPlaceholder: React.FC<{ isLoading: boolean }> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Box align="center">
        <Spinner />
      </Box>
    )
  }
  return <>{children}</>
}
