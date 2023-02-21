import { Icon, IconNames } from '@ui'
import * as S from '../styled'

interface NavItemProps {
  icon: IconNames
  onClick?: () => void
}

export const NavItem = ({ icon, onClick }: NavItemProps): JSX.Element => {
  return (
    <S.NavItem onClick={onClick}>
      {icon && (
        <S.IconContainer>
          <Icon name={icon} />
        </S.IconContainer>
      )}
    </S.NavItem>
  )
}
