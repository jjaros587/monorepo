import { apiClient } from 'src/api'
import { entityConfig } from 'src/config/EntityConfig'
import { injectSafe } from 'src/utils/inject'
import { DocumentNodeService } from './DocumentNodeService'

export class EntityManagerService {
  @injectSafe(() => DocumentNodeService)
  ds!: DocumentNodeService

  readonly entities = entityConfig

  async delete<T>(entityName: string, _id: string) {
    const node = await this.ds.delete(entityName)
    await apiClient.mutate<{ [key: string]: T }>({ mutation: node, variables: { _id } })
  }
}
