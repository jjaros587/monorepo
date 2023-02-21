import { getModelForClass, mongoose, prop } from '@typegoose/typegoose'
import { Directive, Field, ObjectType } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'

@Directive('@root')
@ObjectType()
export class Asset {
  // ID
  @Field((_type) => String)
  @prop({ required: true, default: () => uuidv4() })
  public _id: string

  // Scalars
  @Field((_type) => String)
  @prop({ required: true, unique: true })
  public abbr: string

  @Field((_type) => String)
  @prop({ required: true, unique: true })
  public name: string
}

export const AssetModel = getModelForClass(Asset, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'asset', _id: false }
})
