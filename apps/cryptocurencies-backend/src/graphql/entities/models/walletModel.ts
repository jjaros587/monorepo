import { getModelForClass, mongoose, plugin, prop, Ref } from '@typegoose/typegoose'
import { Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import { User } from './userModel'
import { Asset } from './assetModel'
import mongooseAutoPopulate from 'mongoose-autopopulate'

@ObjectType()
@plugin(mongooseAutoPopulate)
export class Wallet {
  // ID
  @Field(() => String)
  @prop({ type: () => String, required: true, default: () => uuidv4() })
  public _id: string

  // Refs
  @Field(() => User)
  @prop({
    ref: () => User,
    type: () => String,
    required: true,
    autopopulate: true,
  })
  public user: Ref<User, string>

  @Field(() => Asset)
  @prop({
    ref: () => Asset,
    type: () => String,
    required: true,
    autopopulate: true,
  })
  public asset: Ref<Asset, string>

  // Scalars
  @Field(() => Number)
  @prop({ type: () => Number, required: true })
  public amount: number

  @Field(() => Number)
  @prop({ type: () => Number, required: true })
  public price: number
}

export const WalletModel = getModelForClass(Wallet, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'wallet', _id: false },
})
