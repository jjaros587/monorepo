import { decode, sign, TokenExpiredError, verify } from 'jsonwebtoken'
import config from '../config'
import { User } from '@models'
import { Session } from '@types'
import { ExpiredRefreshTokenError, ExpiredTokenError, UnauthenticatedError } from 'src/graphql/errors'
import { AuthChecker } from 'type-graphql'

enum TokenType {
  ACCESS,
  REFRESH
}

export class AuthService {
  static genSession(user: Readonly<User>): Session {
    const { _id, email } = user
    const accessToken = sign({ _id, email, type: TokenType.ACCESS }, config.JWT_SECRET, {
      expiresIn: '1H'
    })
    const refreshToken = sign({ _id, type: TokenType.REFRESH }, config.JWT_SECRET, {
      expiresIn: '10H'
    })
    return { user: { _id, email }, accessToken, refreshToken }
  }

  static decode(token: string) {
    return decode(token, { json: true })
  }

  static getUser(token: string) {
    return this.decode(token)._id
  }

  static validateAndDecode(token: string) {
    const decoded = this.decode(token)
    try {
      verify(token, config.JWT_SECRET)
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        if (decoded.type === TokenType.ACCESS) {
          throw new ExpiredTokenError(e.expiredAt)
        } else {
          throw new ExpiredRefreshTokenError(e.expiredAt)
        }
      }
      throw e
    }
    return decoded
  }

  static authChecker: AuthChecker<{ accessToken: string }> = ({ root, args, context, info }, roles) => {
    return true
    const { accessToken } = context
    if (!accessToken) {
      throw new UnauthenticatedError()
    }
    const token = this.validateAndDecode(accessToken)
    return true
  }
}
