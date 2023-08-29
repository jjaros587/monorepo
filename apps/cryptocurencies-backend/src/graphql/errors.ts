import { ApolloError } from 'apollo-server-errors'

export class UnknownUserError extends ApolloError {
  constructor() {
    super("Account with this email doesn't exist", 'UNKNOWN_USER')
  }
}

export class InvalidCredentialsError extends ApolloError {
  constructor() {
    super('The password is incorrect', 'INCORRECT_PASSWORD')
  }
}

export class ExpiredTokenError extends ApolloError {
  constructor(expiredt: Date) {
    super(`User token provided expired at ${expiredt.toDateString()}`, 'TOKEN_EXPIRED')
  }
}

export class ExpiredRefreshTokenError extends ApolloError {
  constructor(expiredt: Date) {
    super(`Refresh token provided expired at ${expiredt.toDateString()}`, 'REFRESH_TOKEN_EXPIRED')
  }
}

export class UnauthenticatedError extends ApolloError {
  constructor() {
    super(
      `Access denied! You need to be authenticated to perform this action!`,
      'UNAUTHICATED_USER',
    )
  }
}
