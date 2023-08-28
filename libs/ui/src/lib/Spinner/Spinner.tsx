import styled, { css, keyframes } from '@theme'
import { Box, ReactFCWithChildren } from '@ui'
import { Icon } from '@icons'

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

export const FullScreenSpinner = () => {
  return (
    <Box fullScreen align="center" alignY="center">
      <Spinner />
    </Box>
  )
}

export const LoadingPlaceholder: ReactFCWithChildren<{
  isLoading: boolean
}> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Box align="center">
        <Spinner />
      </Box>
    )
  }
  return <>{children}</>
}
