import { PaginationArgs } from '../../args/PaginationArgs'
import { PageInfo } from '../../types'

export interface ResolverInterface<T> {
  get(_id: string): Promise<T>
  getAll(args: PaginationArgs): Promise<{ items: T[]; pageInfo: PageInfo }>
  //   create(_id: string, patch: T): Promise<{ success: boolean; item: T }>
  update(_id: string, patch: Partial<T>): Promise<{ success: boolean; item: T }>
  delete(_id: string): Promise<{ success: boolean; item: T }>
}
