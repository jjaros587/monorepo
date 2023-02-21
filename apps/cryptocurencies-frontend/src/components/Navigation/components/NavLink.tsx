import { Icon, IconNames } from '@ui'
import { useLocation } from 'react-router-dom'
import * as S from '../styled'

interface NavLinkProps {
  to: string
  label?: string
  icon?: IconNames
}

export const NavLink = ({ to, label, icon }: NavLinkProps): JSX.Element => {
  const location = useLocation()
  return (
    <S.NavLink to={to} active={location.pathname === to}>
      <S.LinkText>{label}</S.LinkText>
      {icon && (
        <S.IconContainer>
          <Icon name={icon} />
        </S.IconContainer>
      )}
    </S.NavLink>
  )
}
