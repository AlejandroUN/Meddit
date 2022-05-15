import { InMemoryCache, ApolloClient } from '@apollo/client'
import{ createApolloProvider} from '@vue/apollo-option'
import { createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql',
  })

const client= new ApolloClient({
    cache:cache,
    link: httpLink,
})

export const provider = createApolloProvider({
    defaultClient: client
})