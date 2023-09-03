import { Icon, IconNames } from '@icons'
import { useLocation } from 'react-router-dom'
import * as S from '../styled'
import { Inline, Text } from '@ui'

interface NavLinkProps {
  to: string
  label?: string
  icon?: IconNames
}

export const NavLink = ({ to, label, icon }: NavLinkProps): JSX.Element => {
  const location = useLocation()
  return (
    <S.NavLink to={to} active={location.pathname === to}>
      <Inline align="space-between" alignY="center" gap="M" noWrap fullWidth>
        <S.LinkText>{label}</S.LinkText>

        {icon && (
          <S.IconContainer>
            <Icon name={icon} size="L" />
          </S.IconContainer>
        )}
      </Inline>
    </S.NavLink>
  )
}
