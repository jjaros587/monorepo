'use client'

import { Text, Box } from '@ui'
import styled from '@theme'
import { useTypeAnimation } from '@hooks'

const TypedContainer = styled.span`
  border-bottom: 2px solid var(--colors-primary);
`

export default function Index() {
  const ref = useTypeAnimation({
    strings: ['Developer', 'Freelancer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  })

  return (
    <Box align="center" alignY="center">
      <Text variant="headline1">Jakub Jaroš</Text>
      <Text variant="headline1">
        I&apos;m <TypedContainer ref={ref} />
      </Text>
    </Box>
  )
}
