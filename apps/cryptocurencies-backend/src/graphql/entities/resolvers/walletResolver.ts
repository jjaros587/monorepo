import { Resolver } from 'type-graphql'
import { Wallet, WalletModel } from '../models'
import { createBaseResolver } from '../../factories/createBaseResolver'

const WalletBaseResolver = createBaseResolver(Wallet, WalletModel)

@Resolver(() => Wallet)
export class WalletResolver extends WalletBaseResolver {}
