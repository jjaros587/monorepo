import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { errorLink, authLink, httpLink } from './links'

export const apiClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
})

export class ApiClient {
  public async execute() {
    try {

    } catch (error) {
      
    }
  }
}

export const APIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ApolloProvider client={apiClient}>{children}</ApolloProvider>
}
