import { action, computed, makeObservable, observable, reaction } from 'mobx'
import { ListinStateModel } from './ListingStateModel'
import { ListingQuery, ListingOpts } from './types'
import { PaginationWithPageInfo } from '../ui-kit'
import { PageInfo } from '../graphql'

export class ListingModel<T> {
  @observable
  public readonly listingState: ListinStateModel

  @observable
  private pageInfo: PageInfo = {
    hasNextPage: false,
    hasPreviousPage: false,
    nextItems: 0,
    totalCount: -1,
  }

  @observable
  private _isLoading = false

  @observable
  items: T[] = []

  constructor(private query: ListingQuery<T>, opts?: ListingOpts) {
    makeObservable(this)
    this.listingState = new ListinStateModel(opts)

    reaction(() => this.args, this.fetchItems)
  }

  @action
  public fetchItems = async () => {
    this._isLoading = true
    const { items, pageInfo } = await this.query(this.args)
    this.items = this.listingState.state.additionalPages ? [...this.items, ...items] : items
    this.pageInfo = pageInfo
    this._isLoading = false
  }

  @computed
  get args() {
    const { pageSize, pageNumber, additionalPages, order } = this.listingState.state

    return {
      limit: pageSize,
      skip: (pageNumber + additionalPages - 1) * pageSize,
      order: order,
    }
  }

  @computed
  get hasBeenLoaded() {
    return this.pageInfo.totalCount !== -1
  }

  @computed
  get isLoading() {
    return this._isLoading
  }

  @computed
  get isEmpty() {
    return this.items.length === 0
  }

  @action
  public setPage = (pageNumber: number) => {
    this.listingState.setPage(pageNumber)
  }

  @action
  public setPageSize = (pageSize: number) => {
    this.listingState.setPage(pageSize)
  }

  @action
  public setNextPage = () => {
    this.listingState.setNextPage()
  }

  @action
  public setPreviousPage = () => {
    this.listingState.setPreviousPage()
  }

  @action
  public setAdditionalPage = () => {
    this.listingState.setAdditionalPage()
  }

  @action
  public reset = () => {
    this.listingState.reset()
  }

  @action
  public reload = () => {
    this.listingState.reload()
  }

  @computed
  get pagination(): PaginationWithPageInfo {
    const { pageSize, pageNumber, additionalPages } = this.listingState.state

    return {
      ...this.pageInfo,
      pageSize: pageSize,
      pageNumber: pageNumber,
      additionalPages: additionalPages,
      loadMore: this.setAdditionalPage,
      setPageSize: this.setPageSize,
      setPage: this.setPage,
      setNextPage: this.setNextPage,
      setPreviousPage: this.setPreviousPage,
    }
  }
}
