import { useEffect, useMemo, useState } from 'react'
import { NavLink } from './components/NavLink'
import { NavItem } from './components/NavItem'
import * as S from './styled'
import CurrentUserPopup from '../CurrentUserPopup'
import SCREEN_DESCRIPTORS from '../../config/ScreenConfig'
import { useAuth } from '../../hooks'
import { NavigationNode, RouteType } from '../../app/router/types'
import { Popup } from '@ui'
import { useLocation } from 'react-router-dom'
import { useEventListener } from '@hooks'

interface NavigationItem extends NavigationNode {
  route: string
}

const BREAKPOINT = 768

export const Navigation = (): JSX.Element => {
  const user = useAuth()
  const location = useLocation()
  // Expanded state for 'big' navigation
  const [isExpanded, setIsExpanded] = useState(true)
  // Opened state for 'small' navigation
  const [isOpened, setIsOpened] = useState(false)
  const [navigationType, setNavigationType] = useState<'small' | 'big'>(() =>
    window.innerWidth <= BREAKPOINT ? 'small' : 'big',
  )

  const handleResize = () => {
    const width = window.innerWidth

    if (width <= BREAKPOINT) {
      setNavigationType('small')
    } else {
      setNavigationType('big')
    }

    if (width <= 1000) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    setIsOpened(false)
  }, [location])

  useEventListener('resize', handleResize)

  const navigationItems: NavigationItem[] = useMemo(() => {
    const navigationItems: NavigationItem[] = []
    Object.values(SCREEN_DESCRIPTORS.app.descriptors).forEach((descriptor) => {
      if (descriptor.navigationNode) {
        navigationItems.push({
          ...descriptor.navigationNode,
          route: descriptor.route,
        })
      }
    })
    return navigationItems
  }, [])

  return (
    <S.Navigation isExpanded={isExpanded}>
      <S.Top>
        <NavLink to="/" label={'Logo'} />
      </S.Top>
      <S.Middle isOpened={isOpened}>
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
            key={SCREEN_DESCRIPTORS.protected.descriptors['login'].route}
            to={SCREEN_DESCRIPTORS.protected.descriptors['login'].route}
            icon={'login'}
          />
        )}

        {navigationType === 'big' ? (
          <NavItem
            icon={isExpanded ? 'arrowDoubleLeft' : 'arrowDoubleRight'}
            onClick={() => {
              setIsExpanded((isExpanded) => !isExpanded)
            }}
          />
        ) : (
          <NavItem
            icon={isOpened ? 'arrowDoubleLeft' : 'arrowDoubleRight'}
            onClick={() => {
              setIsOpened(!isOpened)
            }}
          />
        )}
      </S.Bottom>
    </S.Navigation>
  )
}

export default Navigation
