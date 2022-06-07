import { InMemoryCache, ApolloClient } from '@apollo/client'
import{ createApolloProvider} from '@vue/apollo-option'
import { createHttpLink } from '@apollo/client';



const httpLink = createHttpLink({
    uri: 'https://meddit-ag-3fafemp3rq-uc.a.run.app/graphql',
  })

  const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

const client = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,

});

export const provider = createApolloProvider({
    defaultClient: client
})