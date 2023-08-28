import { Resolver } from 'type-graphql';
import { createBaseResolver } from '../../factories/createBaseResolver';
import { Asset, AssetModel } from '../models/assetModel';

const AssetBaseResolver = createBaseResolver(Asset, AssetModel);

@Resolver(() => Asset)
export class AssetResolver extends AssetBaseResolver {}
