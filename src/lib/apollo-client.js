import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.HYGRAPHQL_ENDPOINT,
      onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
      }
    }),
    cache: new InMemoryCache(),
  });
}