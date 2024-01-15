'use client'

import { Inline, Stack, Text, Box } from '@ui'
import { NavItem } from './NavItem'
import { usePathname } from 'next/navigation'
import styled, { css } from '@theme'
import { useCallback, useState } from 'react'
import Image from 'next/image'
import { IconLink } from './IconLink'
import { DownloadResumeButton } from './DownloadResumeButton'
import { ToggleButton } from './ToggleButton'
import { useWindowEventListener } from '@hooks'
import { useEffect } from 'react'

const navigation = [
  { path: '/', title: 'Home', iconName: 'house' },
  { path: '/about', title: 'About me', iconName: 'address-card' },
  { path: '/resume', title: 'Resume', iconName: 'file' },
  { path: '/projects', title: 'My projects', iconName: 'globe' },
]

const NAV_WIDTH = '250px'
const BREAKPOINT = 768

const Nav = styled(Box)<{ isOpened: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${NAV_WIDTH};

  transition: all 0.5s ease-in-out;
  background: var(--colors-navigation);

  @media only screen and (max-width: ${BREAKPOINT}px) {
    ${(p) =>
      p.isOpened
        ? css`
            width: 100vw;
            z-index: 999;
          `
        : css`
            margin-left: -${NAV_WIDTH};
          `}
  }
`

export const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [variant, setVariant] = useState<'big' | 'small'>('big')
  const pathname = usePathname()

  const handleSize = useCallback(() => {
    const width = window.innerWidth
    if (width <= BREAKPOINT) {
      setVariant('small')
      setIsOpened(false)
    } else {
      setVariant('big')
    }
  }, [])

  const handleOnClick = useCallback(() => setIsOpened(false), [])
  const toggle = useCallback(() => setIsOpened((isOpened) => !isOpened), [setIsOpened])

  useEffect(() => handleSize, [handleSize])
  useWindowEventListener('resize', handleSize)

  return (
    <>
      <ToggleButton variant={variant} isOpened={isOpened} toggle={toggle} />
      <Nav isOpened={isOpened} padding="L">
        <Stack gap="L">
          <Box align="center">
            <Image
              src="/portrait.jpeg"
              alt="portrait"
              width="150"
              height="150"
              objectFit="cover"
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Box align="center">
            <Text variant="headline1" color="light">
              Jakub Jaroš
            </Text>
          </Box>
          <Inline gap="M" align="center">
            <IconLink iconName="github" link="https://github.com/jjaros587" />
            <IconLink
              iconName="linkedin-in"
              link="https://www.linkedin.com/in/jakub-jaros-prague/"
            />
          </Inline>
        </Stack>

        <Box style={{ flex: 1 }} alignY="center" align="center" paddingBottom="XXL">
          <nav>
            {navigation.map((props, index) => (
              <NavItem
                key={index}
                isActive={pathname === props.path}
                onClick={handleOnClick}
                {...props}
              />
            ))}
          </nav>
        </Box>

        <DownloadResumeButton />
        <div>
          <Box align="center" paddingTop="M">
            <Text variant="caption">Copyright {'\u00A9'} Jakub Jaroš,</Text>
            <Text variant="caption">All rights reserved</Text>
          </Box>
        </div>
      </Nav>
    </>
  )
}
