import { DocumentNode } from '@apollo/client'
import { capitalize } from 'lodash'
import { buildDeleteMutation } from '../graphql/factories/buildDeleteMutation'

type Keys = 'list' | 'create' | 'delete' | 'update'
type EntityDocumentNodes = { [key: string]: DocumentNode }

export class DocumentNodeService {
  private documentNodes: { [key: string]: EntityDocumentNodes } = {}

  async list(entityName: string): Promise<DocumentNode> {
    return await this.getNode(entityName, 'list')
  }

  async create(entityName: string): Promise<DocumentNode> {
    return await this.getNode(entityName, 'create')
  }

  async update(entityName: string): Promise<DocumentNode> {
    return await this.getNode(entityName, 'update')
  }

  async delete(entityName: string): Promise<DocumentNode> {
    let node = this.getDocumentNode(entityName, 'delete')
    if (!node) {
      node = buildDeleteMutation(entityName)
    }
    return node
  }

  private getNodesForEntity(entityName: string) {
    return this.documentNodes[entityName]
  }

  private getDocumentNode(entityName: string, key: Keys) {
    return this.getNodesForEntity(entityName)?.[key]
  }

  private async getNode(entityName: string, key: Keys) {
    const entity = this.getNodesForEntity(entityName)
    let node = entity?.[key]
    if (node) {
      return node
    }
    node = await import(
      `../graphql/entities/${entityName}/${entityName}${capitalize(key)}.graphql`
    ).then((module) => module.default)

    if (entity) {
      entity[key] = { ...node }
    } else {
      this.documentNodes[entityName] = { [key]: { ...node } }
    }
    return node
  }
}
