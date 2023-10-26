import { Resolver } from 'type-graphql'
import { Wallet, WalletModel } from '../models'
import { createBaseResolver } from '../../factories/createBaseResolver'
import { ResolverInterface } from './types'

const WalletBaseResolver = createBaseResolver(Wallet, WalletModel)

@Resolver(() => Wallet)
export class WalletResolver extends WalletBaseResolver implements ResolverInterface<Wallet> {}
