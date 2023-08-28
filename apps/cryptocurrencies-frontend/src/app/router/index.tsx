import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import { PageNotFound } from '../../pages'
import { RouteType, ScreenDescriptor } from './ScreenDescriptor'
import SCREEN_DESCRIPTORS from '../../config/ScreenConfig'
import { getScreen } from './getScreen'
import { useAuth } from '../../hooks'
import { FC } from 'react'

const Element: FC<{ descriptor: ScreenDescriptor }> = ({ descriptor }) => {
  const user = useAuth().user

  if (descriptor.routeType === RouteType.Protected && user !== null) {
    return <Navigate to={SCREEN_DESCRIPTORS.dashboard.route} />
  }
  if (descriptor.routeType === RouteType.Private && user === null) {
    return <Navigate to={SCREEN_DESCRIPTORS.login.route} />
  }
  return getScreen(descriptor)
}

export const Routes = () => {
  return (
    <RouterRoutes>
      {Object.entries(SCREEN_DESCRIPTORS).map(([key, descriptor]) => (
        <Route key={key} path={descriptor.route} element={<Element descriptor={descriptor} />} />
      ))}
      <Route path={'*'} element={<PageNotFound />} />
    </RouterRoutes>
  )
}
