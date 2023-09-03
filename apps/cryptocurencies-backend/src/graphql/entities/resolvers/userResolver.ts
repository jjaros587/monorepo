import { Mutation, Resolver, Arg } from 'type-graphql'
import { Session } from '../../types'
import { User, UserModel } from '../models'
import * as bcryptjs from 'bcryptjs'
import { UnknownUserError, InvalidCredentialsError } from '../../errors'
import { createBaseResolver } from '../../factories/createBaseResolver'
import { AuthService } from '../../../services/AuthService'

const UserBaseResolver = createBaseResolver(User, UserModel)

@Resolver(() => User)
export class UserResolver extends UserBaseResolver {
  @Mutation(() => Session)
  async register(
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
  ) {
    const user = await UserModel.create({
      email,
      password: bcryptjs.hashSync(password, 10),
    })
    return AuthService.genSession(user)
  }

  @Mutation(() => Session)
  async login(
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
  ) {
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new UnknownUserError()
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      throw new InvalidCredentialsError()
    }
    return AuthService.genSession(user)
  }

  @Mutation(() => Session)
  async refreshTokens(@Arg('refreshToken', () => String) refreshToken: string) {
    const { _id } = AuthService.validateAndDecode(refreshToken)
    const user = await UserModel.findById(_id)
    return AuthService.genSession(user)
  }
}
