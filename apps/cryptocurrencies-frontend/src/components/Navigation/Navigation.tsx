import { useEffect, useMemo, useState } from 'react'
import { NavLink } from './components/NavLink'
import { NavItem } from './components/NavItem'
import * as S from './styled'
import CurrentUserPopup from '../CurrentUserPopup'
import SCREEN_DESCRIPTORS from '../../config/ScreenConfig'
import { useAuth } from '../../hooks'
import { NavigationNode, RouteType } from '../../app/router/ScreenDescriptor'
import { Popup } from '@ui'

interface NavigationItem extends NavigationNode {
  route: string
}

export const Navigation = (): JSX.Element => {
  const [opened, setOpened] = useState(true)
  const user = useAuth().user

  const handleResize = () => window.innerWidth <= 1000 && setOpened(false)

  const navigationItems: NavigationItem[] = useMemo(() => {
    const navigationItems: NavigationItem[] = []
    Object.values(SCREEN_DESCRIPTORS).forEach((descriptor) => {
      if (descriptor.navigationNode) {
        if (
          !(descriptor.routeType === RouteType.Private && user === null) &&
          !(descriptor.routeType === RouteType.Protected && user)
        ) {
          navigationItems.push({
            ...descriptor.navigationNode,
            route: descriptor.route,
          })
        }
      }
    })
    return navigationItems
  }, [user])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <S.Navigation opened={opened}>
      <S.Top>
        <NavLink to="/" label={'Logo'} />
      </S.Top>
      <S.Middle opened={opened}>
        {navigationItems.map((item, index) => {
          return <NavLink key={index} to={item.route} label={item.label} icon={item.icon} />
        })}
      </S.Middle>
      <S.Bottom>
        {user ? (
          <Popup popup={<CurrentUserPopup />} placement="right-start">
            <NavItem icon={'user'} />
          </Popup>
        ) : (
          <NavLink
            key={SCREEN_DESCRIPTORS['login'].route}
            to={SCREEN_DESCRIPTORS.login.route}
            icon={'login'}
          />
        )}

        <NavItem
          icon={opened ? 'arrowDoubleLeft' : 'arrowDoubleRight'}
          onClick={() => setOpened(!opened)}
        />
      </S.Bottom>
    </S.Navigation>
  )
}

export default Navigation
