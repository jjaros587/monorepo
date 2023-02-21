import { Resolver } from 'type-graphql'
import { Wallet, WalletModel } from '@models'
import { createBaseResolver } from 'src/schema/factories/createBaseResolver'

const WalletBaseResolver = createBaseResolver(Wallet, WalletModel)

@Resolver((_of) => Wallet)
export class WalletResolver extends WalletBaseResolver {}
