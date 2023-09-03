import jwt from 'jsonwebtoken'
import config from '../config'
import {
  ExpiredRefreshTokenError,
  ExpiredTokenError,
  UnauthenticatedError,
} from '../graphql/errors'
import { AuthChecker } from 'type-graphql'
import { User } from '../graphql/entities/models'
import { Session } from '../graphql/types'

enum TokenType {
  ACCESS,
  REFRESH,
}

export class AuthService {
  static genSession(user: Readonly<User>): Session {
    const { _id, email } = user
    const accessToken = jwt.sign({ _id, email, type: TokenType.ACCESS }, config.JWT_SECRET, {
      expiresIn: '1H',
    })
    const refreshToken = jwt.sign({ _id, type: TokenType.REFRESH }, config.JWT_SECRET, {
      expiresIn: '3H',
    })
    return { user, accessToken, refreshToken }
  }

  static decode(token: string) {
    return jwt.decode(token, { json: true })
  }

  static getUser(token?: string) {
    return token ? this.decode(token)._id : null
  }

  static validateAndDecode(token?: string) {
    const decoded = this.decode(token)
    try {
      jwt.verify(token, config.JWT_SECRET)
    } catch (e) {
      if (e instanceof jwt.TokenExpiredError) {
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

  static authChecker: AuthChecker<{ accessToken: string }> = (
    { root, args, context, info },
    roles,
  ) => {
    const { accessToken } = context

    if (!accessToken) {
      throw new UnauthenticatedError()
    }

    if (this.validateAndDecode(accessToken)) {
      return true
    }

    return false
  }
}
