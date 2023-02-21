import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@theme'

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const AppLink: React.FC<{ to: string }> = ({ to, children }) => {
  return (
    <div>
      <StyledLink to={to}>{children}</StyledLink>
    </div>
  )
}
