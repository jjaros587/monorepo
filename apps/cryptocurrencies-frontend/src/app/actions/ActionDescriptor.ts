export interface ActionDescriptor {
  displayName: string
  proceed: (params?: any) => Promise<any> | void
}
