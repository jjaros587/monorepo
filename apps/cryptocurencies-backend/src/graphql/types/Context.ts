import { User } from '../entities/models'

export interface Context {
  accessToken: string
  user: Pick<User, '_id' | 'email'>
}
