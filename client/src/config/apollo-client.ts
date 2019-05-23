import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';


const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})
const cache = new InMemoryCache()

export default new ApolloClient({
  link,
  cache
})