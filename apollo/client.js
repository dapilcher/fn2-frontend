import { HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

const { getClient } = registerApolloClient(() => {

  return new NextSSRApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URI || "http://localhost:3000/api/graphql",
      fetchOptions: {
        next: { revalidate: process.env.NODE_ENV === "production" ? 600 : 10 }
      }
    }),
    cache: new NextSSRInMemoryCache(),
  })});

export { getClient };