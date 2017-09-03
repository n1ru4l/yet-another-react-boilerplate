import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import subredditQuery from './subreddit-query.graphql'

export const withSubredditData = graphql(subredditQuery, {
  options: ({ subreddit }) => ({
    variables: { subreddit },
  }),
  props: ({
    ownProps: { inputValue },
    data: { loading: isLoading, reddit, error },
  }) => ({
    isLoading,
    error,
    hotListings: reddit ? reddit.subreddit.hotListings : undefined,
    inputValue,
  }),
})
