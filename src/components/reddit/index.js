import React from 'react'
import { withStateHandlers, compose } from 'recompose'
import { graphql } from 'react-apollo'

import { View } from './view'
import subredditQuery from './subreddit-query.graphql'

const withSubredditData = graphql(subredditQuery, {
  options: ({ subreddit }) => ({
    variables: { subreddit },
  }),
  props: ({ ownProps, data: { loading: isLoading, reddit, error } }) => ({
    isLoading,
    error,
    hotListings: reddit ? reddit.subreddit.hotListings : undefined,
    ...ownProps,
  }),
})

const withFormState = withStateHandlers(
  {
    subreddit: `movies`,
    inputValue: `movies`,
  },
  {
    onChangeInput: () => ev => ({
      inputValue: ev.target.value,
    }),
    onSubmitInput: ({ inputValue }) => ev => {
      ev.preventDefault()
      return { subreddit: inputValue }
    },
  }
)

const enhance = compose(withFormState, withSubredditData)

export const Reddit = enhance(View)
