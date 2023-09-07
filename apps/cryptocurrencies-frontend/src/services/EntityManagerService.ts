import { apiClient } from '../api'
import { entityConfig } from '../config/EntityConfig'
import { OrderArgs, PageInfo } from '../graphql'
import { injectSafe } from '../utils/inject'
import { DocumentNodeService } from './DocumentNodeService'

interface PagenatedResponse<T> {
  items: T[]
  pageInfo: PageInfo
}

export class EntityManagerService {
  @injectSafe(() => DocumentNodeService)
  dns!: DocumentNodeService

  readonly entities = entityConfig

  async createEntity<T>(entityName: string, data: T) {
    const createMutation = await this.dns.create(entityName)
    return apiClient.mutate({ mutation: createMutation, variables: { new: data } })
  }

  async updateEntity<T>(entityName: string, _id: string, data: T) {
    const updateMutation = await this.dns.update(entityName)
    return apiClient.mutate({ mutation: updateMutation, variables: { _id, patch: data } })
  }

  async deleteEntity(entityName: string, _id: string) {
    const deleteMutation = await this.dns.delete(entityName)
    return apiClient.mutate({
      mutation: deleteMutation,
      variables: { _id },
    })
  }

  async fetchEntities<T>(
    entityName: string,
    properties: string[],
    opts: { skip?: number; limit?: number; order?: OrderArgs },
  ) {
    const listQuery = await this.dns.list(entityName, properties)
    return apiClient.query<{ [key: string]: PagenatedResponse<T> }>({
      query: listQuery,
      variables: opts,
    })
  }
}
