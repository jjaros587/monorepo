'use client'

import { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import { Text, Box } from '@ui'
import styled from '@theme'

const TypedContainer = styled.span`
  border-bottom: 2px solid var(--colors-primary);
`

export default function Index() {
  const ref = useRef(null)

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['Developer', 'Freelancer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <Box align="center" alignY="center">
      <Text variant="headline1">Jakub Jaroš</Text>
      <Text variant="headline1">
        I&apos;m <TypedContainer ref={ref} />
      </Text>
    </Box>
  )
}
