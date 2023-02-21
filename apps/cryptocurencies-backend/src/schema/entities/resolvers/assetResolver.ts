import { Resolver } from 'type-graphql'
import { Asset, AssetModel } from '../models/assetModel'
import { createBaseResolver } from 'src/schema/factories/createBaseResolver'

const AssetBaseResolver = createBaseResolver(Asset, AssetModel)

@Resolver((_of) => Asset)
export class AssetResolver extends AssetBaseResolver {}
