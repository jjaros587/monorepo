import { Switch, Route, Redirect } from 'react-router-dom'
import { PageNotFound } from '@pages'
import { RouteType } from './ScreenDescriptor'
import SCREEN_DESCRIPTORS from 'src/config/ScreenConfig'
import { getScreen } from './getScreen'
import { useAuth } from '@hooks'

export const Routes = () => {
  const user = useAuth().user
  return (
    <Switch>
      {Object.values(SCREEN_DESCRIPTORS).map((descriptor, index) => (
        <Route
          key={index}
          path={descriptor.route}
          render={() => {
            if (descriptor.routeType === RouteType.Protected && user !== null) {
              return <Redirect to={SCREEN_DESCRIPTORS.dashboard.route} />
            }
            if (descriptor.routeType === RouteType.Private && user === null) {
              return <Redirect to={SCREEN_DESCRIPTORS.login.route} />
            }
            return getScreen(descriptor)
          }}
        />
      ))}
      <Route path={'*'}>
        <PageNotFound />
      </Route>
    </Switch>
  )
}
