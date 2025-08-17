import { HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URI || "http://localhost:3000/api/graphql"}),
    cache: new NextSSRInMemoryCache(),
  })});

export { getClient };