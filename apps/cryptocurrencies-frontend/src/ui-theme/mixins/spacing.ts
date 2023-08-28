import { PositiveSpaceUnit, Spacing } from '../tokens/spacing'

export type SizeUnit = PositiveSpaceUnit | 0 | 'auto'

type Dimensions =
  | [SizeUnit]
  | [SizeUnit, SizeUnit]
  | [SizeUnit, SizeUnit, SizeUnit]
  | [SizeUnit, SizeUnit, SizeUnit, SizeUnit]

const spacingMixin =
  (propertyName: string) =>
  (...dimensions: Dimensions) =>
    `${propertyName}: ${dimensions.map((size) => (size === 0 || size === 'auto' ? size : Spacing[size])).join(' ')};`

const spacingMixinFactory = (propertyName: string) => {
  return Object.assign(spacingMixin(propertyName), {
    top: spacingMixin(`${propertyName}-top`),
    bottom: spacingMixin(`${propertyName}-bottom`),
    left: spacingMixin(`${propertyName}-left`),
    right: spacingMixin(`${propertyName}-right`)
  })
}

export const padding = spacingMixinFactory('padding')
export const margin = spacingMixinFactory('margin')
