import { merge } from 'lodash'
import { ListingOpts, ListingState } from './types'
import { action, computed, makeObservable, observable } from 'mobx'

const DEFAULT_STATE: ListingState = {
  pageNumber: 1,
  pageSize: 5,
  additionalPages: 0,
}

export class ListinStateModel {
  @observable
  private _state: ListingState = DEFAULT_STATE

  constructor(opts?: ListingOpts) {
    makeObservable(this)
    this.mergeOpts(opts)
  }

  @computed
  get state() {
    return this._state
  }

  // TODO - needs testing... should reset some values?
  @action
  public setPageSize = (pageSize: number) => {
    this.mergeOpts({ pageSize, additionalPages: 0 })
  }

  @action
  public setPage = (pageNumber: number) => {
    this.mergeOpts({ pageNumber, additionalPages: 0 })
  }

  @action
  public setNextPage = () => {
    const { pageNumber, additionalPages } = this.state
    this.mergeOpts({ pageNumber: pageNumber + additionalPages + 1, additionalPages: 0 })
  }

  @action
  public setPreviousPage = () => {
    this.mergeOpts({ pageNumber: this.state.pageNumber - 1, additionalPages: 0 })
  }

  @action
  public setAdditionalPage = () => {
    this.mergeOpts({ additionalPages: this.state.additionalPages + 1 })
  }

  @action
  public reset = () => {
    this.mergeOpts({ pageNumber: 1, additionalPages: 0 })
  }

  @action
  public reload = () => {
    this.mergeOpts({ additionalPages: 0 })
  }

  @action
  private mergeOpts = (newState?: Partial<ListingState>) => {
    this._state = merge({}, this._state, newState)
  }
}
