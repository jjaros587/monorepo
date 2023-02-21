import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'

export default class CoinbaseDatasource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.coinbase.com/v2'
  }

  async assets() {
    const response = await this.get('/currencies')
    return response.data
  }
}
