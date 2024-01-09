import styled, { css } from '@theme'
import { Text, Box } from '@ui'
import Link from 'next/link'
import { FC, useState } from 'react'
import { HEADER_HEIGHT } from '../../constants'

interface Props {
  path: string
  title: string
  isActive: boolean
}

const Item = styled(Box)<{ isActive: boolean }>`
  height: ${HEADER_HEIGHT};
  ${(p) =>
    p.isActive &&
    css`
      box-shadow: 0px 2px 0px 0px ${p.theme.colors.primary};
    `}
`

export const NavItem: FC<Props> = ({ path, title, isActive }) => {
  const [isHovered, setHovered] = useState(false)

  return (
    <Link href={path} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Item paddingX="L" isActive={isActive} alignY="center">
        <Text color={isActive || isHovered ? 'light' : undefined}>{title}</Text>
      </Item>
    </Link>
  )
}
