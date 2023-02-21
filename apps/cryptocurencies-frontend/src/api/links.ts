import { AuthState } from '@hooks'
import { onError } from '@apollo/client/link/error'
import { ServiceContainer } from '@utils'
import { LocalStorageService, STORAGE_KEYS } from '@services'
import { ApolloLink, fromPromise, HttpLink } from '@apollo/client'
import { genNewToken } from './utils'

export const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

export const authLink = new ApolloLink((operation, forward) => {
  const accessToken = ServiceContainer.get(LocalStorageService).get<AuthState>(STORAGE_KEYS.AUTH)?.accessToken

  operation.setContext(({ headers }: { headers: Headers }) => ({
    headers: {
      ...headers,
      authorization: accessToken || ''
    }
  }))

  return forward(operation)
})

export const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const { message, locations, path, extensions } = err
      switch (extensions?.code) {
        case 'TOKEN_EXPIRED':
          return fromPromise(genNewToken())
            .filter((value) => Boolean(value))
            .flatMap((accessToken) => {
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  authorization: accessToken
                }
              })
              return forward(operation)
            })
        default:
          // pushMessage({ type: FlashMessageType.Danger, title: 'GraphQL Error', content: message })
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      }
    }
  }
  if (networkError) {
    // pushMessage({ type: FlashMessageType.Danger, title: 'Network Error', content: networkError.message })
    console.log(`[Network error]: ${networkError}`)
  }
})
