import { IconNames } from '@ui'
import React from 'react'

type ENTITIES = 'transaction' | 'withdrawal'

export enum RouteType {
  Private,
  Public,
  Protected
}

export enum ScreenType {
  Listing,
  Custom
}

export interface NavigationNode {
  label: string
  icon: IconNames
}

export interface BaseScreenDescriptor {
  type: ScreenType
  routeType: RouteType
  route: string
  disabled?: boolean
  navigationNode?: NavigationNode
}

export interface ListingScreenDescriptor extends BaseScreenDescriptor {
  type: ScreenType.Listing
  entityName: ENTITIES
}

export interface CustomScreenDescriptor extends BaseScreenDescriptor {
  type: ScreenType.Custom
  Component: React.ComponentType<any>
}

export type ScreenDescriptor = ListingScreenDescriptor | CustomScreenDescriptor
