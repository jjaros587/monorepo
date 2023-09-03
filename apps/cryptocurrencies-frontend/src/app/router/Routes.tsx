import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { PageNotFound } from '../../pages'
import { RouteType, ScreenDescriptor } from './types'
import SCREEN_DESCRIPTORS from '../../config/ScreenConfig'
import { getScreen } from './getScreen'
import { useAuth } from '../../hooks'
import { FC } from 'react'

const Element: FC<{ descriptor: ScreenDescriptor; routeType: RouteType }> = ({
  descriptor,
  routeType,
}) => {
  const user = useAuth().user

  if (routeType === RouteType.Protected && user) {
    return <Navigate to={SCREEN_DESCRIPTORS.app.descriptors['dashboard'].route} />
  }
  if (routeType === RouteType.Private && !user) {
    return <Navigate to={SCREEN_DESCRIPTORS.protected.descriptors['login'].route} />
  }
  return getScreen(descriptor, routeType)
}

export const Routes = () => {
  return (
    <RouterRoutes>
      {Object.values(SCREEN_DESCRIPTORS).map((part) => {
        const { type, descriptors } = part
        return Object.entries(descriptors).map(([key, descriptor]) => {
          return (
            <Route
              key={key}
              path={descriptor.route}
              element={<Element descriptor={descriptor} routeType={type} />}
            />
          )
        })
      })}
      <Route path={'*'} element={<PageNotFound />} />
    </RouterRoutes>
  )
}
