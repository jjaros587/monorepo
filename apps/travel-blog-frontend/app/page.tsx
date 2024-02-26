'use client'

import styled from '@theme'
import { Text, Button, Box } from '@ui'
import { HomePageWallpapers } from '../src/common/HomePageWallpapers/HopePageWallpapers'
import { Map } from '../src/components/Map/Map'

const Container = styled.main`
  min-height: 100vh;
  padding-bottom: 4rem;
  display: flex;

  flex-direction: column;
  align-items: center;
`

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  padding-top: 30vh;
`

export default function Page() {
  return (
    <Container>
      <Box fullScreen>
        <HomePageWallpapers />
      </Box>
      <Wrapper>
        <Text variant="display" color="warning">
          AAA
        </Text>
        <Text variant="display" color="warning">
          BBB
        </Text>
        <Button primary>Start exploring</Button>
      </Wrapper>
      <Map />
    </Container>
  )
}
