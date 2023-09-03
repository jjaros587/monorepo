import { AppLayout } from '../layouts/AppLayout'
import { PublicLayout } from '../layouts/PublicLayout'
import { RouteType, ScreenDescriptor } from './types'

export function getScreen(descriptor: ScreenDescriptor, routeType: RouteType) {
  if (routeType === RouteType.Private) {
    return (
      <AppLayout>
        <descriptor.Component />
      </AppLayout>
    )
  } else {
    return (
      <PublicLayout>
        <descriptor.Component />
      </PublicLayout>
    )
  }
}
