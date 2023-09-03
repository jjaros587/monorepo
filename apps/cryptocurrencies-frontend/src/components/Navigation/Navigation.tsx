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

interface NavigationItem extends NavigationNode {
  route: string
}

export const Navigation = (): JSX.Element => {
  const user = useAuth()
  const location = useLocation()
  const [navigationType, setNavigationType] = useState<'small' | 'big'>('big')
  // Expanded state for 'big' navigation
  const [isExpanded, setIsExpanded] = useState(true)
  // Opened state for 'small' navigation
  const [isOpened, setIsOpened] = useState(false)

  const handleResize = () => {
    const width = window.innerWidth

    if (width <= 768) {
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

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
  }, [user])

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
