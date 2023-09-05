import { getModelForClass, mongoose, plugin, prop, Ref } from '@typegoose/typegoose'
import { v4 as uuidv4 } from 'uuid'
import { User } from './userModel'
import { Asset } from './assetModel'
import autopopulate from 'mongoose-autopopulate'
import { Field, ObjectType } from 'type-graphql'
import { TransactionTypes } from '../../types'
// import { InputField } from '../../../decorators/InputField'

@plugin(autopopulate)
@ObjectType()
export class Transaction {
  // ID
  @Field(() => String)
  @prop({ type: () => String, required: true, default: () => uuidv4() })
  public _id: string

  // Refs
  @Field(() => User)
  // @InputField(() => String, false)
  @prop({
    ref: () => User,
    type: () => String,
    required: true,
    autopopulate: true,
  })
  public user: Ref<User, string>

  @Field(() => Asset)
  // @InputField(() => String)
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
  public date: number

  @Field(() => Number)
  @prop({ type: () => Number, required: true })
  public amount: number

  @Field(() => Number)
  @prop({ type: () => Number, required: true })
  public price: number

  @Field(() => Number)
  @prop({ type: () => Number, required: true, default: 0 })
  public fee: number

  @Field(() => Number)
  public total(): number {
    return this.amount * this.price + this.fee
  }

  @Field(() => TransactionTypes)
  @prop({ required: true, enum: TransactionTypes, type: String })
  public type: TransactionTypes
}

export const TransactionModel = getModelForClass(Transaction, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'transaction', _id: false },
})
