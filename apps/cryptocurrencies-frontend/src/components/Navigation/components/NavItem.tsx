import { Icon, IconNames } from '@icons'
import * as S from '../styled'
import { Inline } from '@ui'

interface NavItemProps {
  icon: IconNames
  onClick?: () => void
}

export const NavItem = ({ icon, onClick }: NavItemProps): JSX.Element => {
  return (
    <S.NavItem onClick={onClick}>
      <Inline alignY="center" align="flex-end" fullHeight>
        {icon && (
          <S.IconContainer>
            <Icon name={icon} />
          </S.IconContainer>
        )}
      </Inline>
    </S.NavItem>
  )
}
