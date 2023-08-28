import { Fetcher } from './ArticleManager';

export class ListingModel {
  private fetcher: Fetcher;
  private _items: Array<any>;

  constructor(
    indexKey: string,
    private opts: { offset: number; limit: number } = { offset: 0, limit: 10 }
  ) {
    this.fetcher = new Fetcher(indexKey);
  }

  get items() {
    return this._items;
  }

  // fetchItems = () => {
  //   const { hits } = await this.fetcher.getItems({
  //     query: '*',
  //     options: this.opts,
  //   });
  //   this._items = hits;
  // };

  fetchMore = async () => {};

  get hasNextPage() {
    return true;
  }

  get hasPreviousPage() {
    return true;
  }
}
