import { getModelForClass, mongoose, prop, plugin } from '@typegoose/typegoose'
import { Directive, Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import autopopulate from 'mongoose-autopopulate'

@Directive('@root')
@plugin(autopopulate)
@ObjectType()
export class Asset {
  // ID
  @Field(() => String)
  @prop({ type: () => String, required: true, default: () => uuidv4() })
  public _id!: string

  // Scalars
  @Field(() => String)
  @prop({ type: () => String, required: true, unique: true })
  public abbr: string

  @Field(() => String)
  @prop({ type: () => String, required: true, unique: true })
  public name: string
}

export const AssetModel = getModelForClass(Asset, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'asset' },
})
