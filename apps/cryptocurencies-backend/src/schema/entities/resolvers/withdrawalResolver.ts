import {
  Arg,
  InputType,
  Field,
  Authorized,
  Resolver,
  Mutation,
} from 'type-graphql';
import { createBaseResolver } from '../../factories/createBaseResolver';
import { Withdrawal, WithdrawalModel } from '../models/withdrawalModel';

@InputType({ description: 'New withdrawal data' })
class AddWithdrawalInput implements Partial<Withdrawal> {
  @Field(() => String)
  user: string;

  @Field(() => Number)
  date: number;

  @Field(() => Number)
  amount: number;
}

const WithdrawalBaseResolver = createBaseResolver(Withdrawal, WithdrawalModel);

@Resolver(() => Withdrawal)
export class WithdrawalResolver extends WithdrawalBaseResolver {
  @Authorized()
  @Mutation(() => Withdrawal)
  async withdrawalCreate(
    @Arg('new', () => AddWithdrawalInput) newWithdrawal: AddWithdrawalInput
  ): Promise<Withdrawal> {
    const transaction = await WithdrawalModel.create(newWithdrawal);
    return transaction;
  }
}
