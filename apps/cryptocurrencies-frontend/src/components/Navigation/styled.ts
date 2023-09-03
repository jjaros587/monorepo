import styled, { css } from '@theme'
import { Box, Text } from '@ui'
import { Link } from 'react-router-dom'

export const Navigation = styled.nav<{ isExpanded: boolean }>`
  position: relative;
  height: 100%;
  width: 250px;
  margin-left: ${(props) => (props.isExpanded ? '0px' : '-200px')};

  transition: 300ms ease all;
  // box-shadow: 0 0 1rem 0 rgba(255, 255, 255, 0.2);
  background-color: ${(p) => p.theme.colors.surface};

  @media (max-width: 768px) {
    left: 0px;
    width: 100%;
    height: 50px;
    float: none;
    ${(p) => p.theme.margin(0)}
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  }
`

export const Top = styled.div`
  height: 50px;

  @media (max-width: 768px) {
    width: 50px;
  }
`

export const Middle = styled.div<{ isOpened: boolean }>`
  border-top: 1px solid #2c3e50;
  transition: 300ms ease all;
  z-index: 999;

  @media (max-width: 768px) {
    transition: max-height 300ms ease all;
    position: absolute;
    top: 50px;
    width: 100vw;
    height: calc(100vh - 60px);
    display: ${(props) => (props.isOpened ? 'block' : 'none')};
    background-color: ${(props) => props.theme.colors.surface};
  }
`

export const Bottom = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #2c3e50;
  @media (max-width: 768px) {
    flex-direction: row;
    right: 0;
    width: auto;
  }
`

export const IconContainer = styled(Box).attrs({ align: 'center' })`
  width: 50px;
`

export const LinkText = styled(Text)`
  ${(p) => p.theme.font.bodyMedium()};

  :hover {
    color: ${(p) => p.theme.colors.primary};
    ${(p) => p.theme.font.bodyMedium('light')};
  }
`

const navItemBaseStyles = css`
  ${(p) => p.theme.font.bodyMedium()};
  position: relative;
  height: 50px;
  cursor: pointer;

  :hover {
    ${(p) => p.theme.font.bodyMedium('light')};
    ${LinkText} {
      ${(p) => p.theme.font.bodyMedium('light')};
    }
  }
`

export const NavLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  ${navItemBaseStyles}
  padding-left: 30px;
  display: flex;

  ${(p) =>
    p.active &&
    css`
      background-color: ${(p) => p.theme.colors.primary};
      ${(p) => p.theme.font.bodyMedium('light')};
      ${LinkText} {
        ${(p) => p.theme.font.bodyMedium('light')};
      }
    `}
`

export const NavItem = styled(Box)`
  ${navItemBaseStyles}
  @media (max-width: 768px) {
    width: 50px;
  }
`
