import { Min, Max } from 'class-validator'
import { ArgsType, Field, InputType } from 'type-graphql'
import { prop } from '@typegoose/typegoose'
import { OrderDirection } from '../types'

@InputType()
class OrderArgs {
  @Field(() => String)
  orderBy: string

  @Field(() => OrderDirection, {
    nullable: true,
    defaultValue: OrderDirection.Asc,
  })
  @prop({ required: true, enum: OrderDirection, type: Number })
  orderDirection: number
}

@ArgsType()
export class PaginationArgs {
  @Field(() => Number, { nullable: true })
  @Min(0)
  skip: number

  @Field(() => Number, { nullable: true })
  @Min(1)
  @Max(50)
  limit: number

  @Field(() => OrderArgs, { nullable: true })
  order: OrderArgs

  // helpers - index calculations
  get startIndex(): number {
    return this.skip + 1
  }
  get endIndex(): number {
    return this.skip + this.limit
  }
}
