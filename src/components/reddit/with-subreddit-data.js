import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const subredditQuery = gql`
  query movies($subreddit: String!) {
    reddit {
      subreddit(name: $subreddit) {
        name
        hotListings(limit: 10) {
          fullnameId
          title
          numComments
        }
      }
    }
  }
`

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
