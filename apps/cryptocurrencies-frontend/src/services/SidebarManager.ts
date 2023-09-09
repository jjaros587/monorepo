import { IconNames } from '@icons'
import { action, computed, makeObservable, observable } from 'mobx'

export interface SidebarItem {
  isDestructive?: boolean
  title: string
  icon?: IconNames
  Renderer: React.ComponentType
}

export class SidebarManager {
  @observable
  private _isOpened = false

  @observable
  _sidebarItem: SidebarItem | null = null

  constructor() {
    makeObservable(this)
  }

  @computed
  get isOpened() {
    return this._isOpened
  }

  @computed
  get sidebarItem() {
    return this._sidebarItem
  }

  @action
  pop = () => {
    this._isOpened = false
    this._sidebarItem = null
  }

  @action
  push = (item: SidebarItem) => {
    this._isOpened = true
    this._sidebarItem = item
  }
}
