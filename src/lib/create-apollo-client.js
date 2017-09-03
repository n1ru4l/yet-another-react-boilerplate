import { ApolloClient, createNetworkInterface } from 'apollo-client'

export const createApolloClient = (options = {}) => {
  const networkInterface = createNetworkInterface({
    uri: `https://www.graphqlhub.com/graphql`,
  })
  return new ApolloClient(
    Object.assign(
      {
        ssrForceFetchDelay: 100,
        connectToDevTools: process.env.NODE_ENV !== `production`,
        networkInterface,
      },
      options
    )
  )
}
