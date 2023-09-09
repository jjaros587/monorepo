import {
  DocumentNodeService,
  LocalStorageService,
  EntityManagerService,
  ModalManager,
  SidebarManager,
} from '../services'
import find from 'lodash/find'
import { Class } from '../app/types'

class ServiceContainerClass {
  private services: { [key: string]: any } = {}

  register(serviceName: string, instance: any) {
    console.assert(
      !(serviceName in this.services),
      `Service with name "${serviceName}" is already registered`,
    )
    this.services[serviceName] = instance
  }

  get<T>(ServiceClass: Class<T>): T {
    const service = find(this.services, (service) => service instanceof ServiceClass)
    if (!service) {
      throw new Error(`Service "${ServiceClass.name}" is not registered.`)
    }
    return service
  }
}

export const ServiceContainer = new ServiceContainerClass()
ServiceContainer.register('localStorageService', new LocalStorageService())
ServiceContainer.register('documentNodeService', new DocumentNodeService())
ServiceContainer.register('entityManagerService', new EntityManagerService())
ServiceContainer.register('modalManager', new ModalManager())
ServiceContainer.register('sidebarManager', new SidebarManager())
