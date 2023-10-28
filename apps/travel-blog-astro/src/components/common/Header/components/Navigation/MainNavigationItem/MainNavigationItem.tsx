'use client'

// import Link, { LinkProps } from 'next/link'
import {
  Wrapper,
  MainNavigationLinkCaret,
  SubNavigationPoppup,
  SubNavigationContent,
  SubNavigation,
} from '../styled'
// import { usePathname } from 'next/navigation';
import { Text, Inline } from '@ui'
import { useState } from 'react'

type NavigationItemProps = {
  label: string
  subNavigation?: React.ReactNode
  href: string
}

export const MainNavigationItem = (props: NavigationItemProps) => {
  const { href, label, subNavigation } = props
  const [over, setOver] = useState(false)
  // const pathname = usePathname();
  // const selected = pathname === href;

  return (
    <a href={href}>
      <SubNavigation>
        <Wrapper
          selected={false}
          alignY="center"
          align="center"
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <Inline>
            <Text
              variant="bodyMedium"
              // color={over || selected ? 'light' : 'basic'}
            >
              {label}
            </Text>
            {subNavigation && (
              <MainNavigationLinkCaret
                height="6"
                role="img"
                viewBox="0 0 10 6"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5.07223 5.1517L9.23083 1"></path>
              </MainNavigationLinkCaret>
            )}
          </Inline>
        </Wrapper>
        {subNavigation && (
          <SubNavigationPoppup>
            <SubNavigationContent>{subNavigation}</SubNavigationContent>
          </SubNavigationPoppup>
        )}
      </SubNavigation>
    </a>
  )
}
