import { Resolver } from 'type-graphql'
import { createBaseResolver } from '../../factories/createBaseResolver'
import { Asset, AssetModel } from '../models/assetModel'
import { ResolverInterface } from './types'

const AssetBaseResolver = createBaseResolver(Asset, AssetModel)

@Resolver(() => Asset)
export class AssetResolver extends AssetBaseResolver implements ResolverInterface<Asset> {}
