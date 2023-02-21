import { getModelForClass, mongoose, plugin, prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { User } from './userModel'
import { Asset } from './assetModel'
import mongooseAutoPopulate from 'mongoose-autopopulate'

@ObjectType()
@plugin(mongooseAutoPopulate as any)
export class Wallet {
  // ID
  @Field((_type) => String)
  @prop({ required: true, default: () => uuidv4() })
  public _id: string

  // Refs
  @Field((_type) => User)
  @prop({ ref: () => User, type: () => String, required: true, autopopulate: true })
  public user: Ref<User, string>

  @Field((_type) => Asset)
  @prop({ ref: () => Asset, type: () => String, required: true, autopopulate: true })
  public asset: Ref<Asset, string>

  // Scalars
  @Field((_type) => Number)
  @prop({ required: true })
  public current: number
}

export const WalletModel = getModelForClass(Wallet, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'wallet', _id: false }
})
