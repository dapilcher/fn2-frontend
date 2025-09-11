import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache
} from '@apollo/client-integration-nextjs';

const { getClient } = registerApolloClient(() => {

  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URI || "http://localhost:3000/api/graphql",
      fetchOptions: {
        next: { revalidate: process.env.NODE_ENV === "production" ? 600 : 10 }
      }
    }),
    cache: new InMemoryCache(),
  })});

export { getClient };