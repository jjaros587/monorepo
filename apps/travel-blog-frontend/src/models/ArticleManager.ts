import MeiliSearch, { SearchParams } from 'meilisearch';

export class Fetcher {
  public readonly client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'masterKey',
  });

  constructor(private indexKey: string) {}

  getItem = async (documentId: string) => {
    const response = this.client.index(this.indexKey).getDocument(documentId);
  };

  getItems = async (searchParams: {
    query?: string | null;
    options?: SearchParams;
    config?: Partial<Request>;
  }) => {
    const { query, options, config } = searchParams;
    return await this.client
      .index(this.indexKey)
      .search(query, options, config);
  };
}
