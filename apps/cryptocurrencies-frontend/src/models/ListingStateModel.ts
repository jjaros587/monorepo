// import { merge } from 'lodash'
import { OrderArgs } from '../graphql'
import { ListingOpts, ListingState } from './types'
import { action, computed, makeObservable, observable } from 'mobx'

const DEFAULT_STATE: ListingState = {
  pageNumber: 1,
  pageSize: 10,
  additionalPages: 0,
}

export class ListinStateModel {
  //   @observable
  //   private state: ListingState

  @observable
  private _pageNumber: number = DEFAULT_STATE.pageNumber

  @observable
  private _pageSize: number = DEFAULT_STATE.pageSize

  @observable
  private _additionalPages: number = DEFAULT_STATE.additionalPages

  @observable
  private _order?: OrderArgs

  constructor(opts?: ListingOpts) {
    makeObservable(this)

    if (opts) {
      this.mergeArgs(opts)
    }
  }

  @computed
  get pageSize() {
    return this._pageSize
  }

  @computed
  get pageNumber() {
    return this._pageNumber
  }

  @computed
  get additionalPages() {
    return this._additionalPages
  }

  @computed
  get order() {
    return this._order
  }

  // TODO - needs testing... should reset some values?
  @action
  public setPageSize = (pageSize: number) => {
    this.mergeArgs({ pageSize, additionalPages: 0 })
  }

  @action
  public setPage = (pageNumber: number) => {
    this.mergeArgs({ pageNumber, additionalPages: 0 })
  }

  @action
  public setNextPage = () => {
    const { pageNumber, additionalPages } = this
    this.mergeArgs({ pageNumber: pageNumber + additionalPages + 1 })
  }

  @action
  public setPreviousPage = () => {
    this.mergeArgs({ pageNumber: this.pageNumber - 1, additionalPages: 0 })
  }

  @action
  public setAdditionalPage = () => {
    this.mergeArgs({ additionalPages: this.additionalPages + 1 })
  }

  @action
  public reset = () => {
    this.mergeArgs({ pageNumber: 1, additionalPages: 0 })
  }

  @action
  public reload = () => {
    this.mergeArgs({ additionalPages: 0 })
  }

  @action
  private mergeArgs = (newState: Partial<ListingState>) => {
    this._pageNumber = newState.pageNumber ?? this.pageNumber
    this._pageSize = newState.pageSize ?? this.pageSize
    this._additionalPages = newState.additionalPages ?? this.additionalPages
    // this.state = {
    //   ...this.state,
    //   ...newState,
    // }
  }
}
