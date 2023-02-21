import { Mutation, Resolver, Arg, Authorized } from 'type-graphql'
import { Session } from '@types'
import { User, UserModel } from '@models'
import * as bcrypt from 'bcrypt'
import { UnknownUserError, InvalidCredentialsError } from 'src/graphql/errors'
import { createBaseResolver } from 'src/schema/factories/createBaseResolver'
import { AuthService } from 'src/services/AuthService'

const UserBaseResolver = createBaseResolver(User, UserModel)

@Resolver((_of) => User)
export class UserResolver extends UserBaseResolver {
  @Mutation(() => Session)
  async register(@Arg('email', (_type) => String) email: string, @Arg('password', (_type) => String) password: string) {
    const user = await UserModel.create({ email, password: bcrypt.hashSync(password, 10) })
    return AuthService.genSession(user)
  }

  @Mutation(() => Session)
  async login(@Arg('email', (_type) => String) email: string, @Arg('password', (_type) => String) password: string) {
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new UnknownUserError()
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new InvalidCredentialsError()
    }
    return AuthService.genSession(user)
  }

  @Mutation(() => Session)
  async refreshTokens(@Arg('refreshToken') refreshToken: string) {
    const { _id } = AuthService.validateAndDecode(refreshToken)
    const user = await UserModel.findById(_id)
    return AuthService.genSession(user)
  }
}
