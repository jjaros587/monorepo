import styled from '@theme'
import { Text, Box, Inline } from '@ui'
import Link from 'next/link'
import { FC, useState } from 'react'

interface Props {
  path: string
  title: string
  iconName: string
  isActive: boolean
  onClick: () => void
}

const Item = styled(Box)`
  height: 50px;
`

export const NavItem: FC<Props> = ({ path, title, iconName, isActive, onClick }) => {
  const [isHovered, setHovered] = useState(false)
  const color = isHovered || isActive ? 'light' : undefined

  return (
    <Link
      href={path}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <Item paddingX="S" alignY="center" align="flex-start">
        <Inline gap="S">
          <Inline.Item width="20">
            <Text color={color}>
              <i className={`fa-solid fa-${iconName}`} />
            </Text>
          </Inline.Item>
          <Inline.Item>
            <Text color={color}>{title}</Text>
          </Inline.Item>
        </Inline>
      </Item>
    </Link>
  )
}
