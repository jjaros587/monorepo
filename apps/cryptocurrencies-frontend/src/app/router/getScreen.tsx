import { ScreenDescriptor, ScreenType } from './ScreenDescriptor'

export function getScreen(descriptor: ScreenDescriptor) {
  if (descriptor.type === ScreenType.Custom) {
    return <descriptor.Component />
  } else {
    return <>listing</>
  }
}
