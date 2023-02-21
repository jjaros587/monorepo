import { Arg, InputType, Field, Authorized, Resolver, Mutation } from 'type-graphql'
import { Withdrawal, WithdrawalModel, User } from '@models'
import { createBaseResolver } from 'src/schema/factories/createBaseResolver'

@InputType({ description: 'New withdrawal data' })
class AddWithdrawalInput implements Partial<Withdrawal> {
  @Field()
  user: string
  @Field()
  date: number
  @Field()
  amount: number
}

const WithdrawalBaseResolver = createBaseResolver(Withdrawal, WithdrawalModel)

@Resolver((_of) => Withdrawal)
export class WithdrawalResolver extends WithdrawalBaseResolver {
  @Authorized()
  @Mutation(() => Withdrawal)
  async withdrawalCreate(@Arg('new') newWithdrawal: AddWithdrawalInput): Promise<Withdrawal> {
    const transaction = await WithdrawalModel.create(newWithdrawal)
    return transaction
  }
}
