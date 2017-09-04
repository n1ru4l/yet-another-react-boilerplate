// @flow
import React from 'react'
import { Helmet } from 'react-helmet'

import { SearchInput } from './search-input'
import { TopicList } from './topic-list'
import type { ViewProps } from './types'

export const View = ({
  isLoading,
  error,
  hotListings,
  inputValue,
  onChangeInput,
  onSubmitInput,
}: ViewProps) => (
  <div>
    <Helmet>
      <title>Reddit</title>
      <meta name="keywords" content="reddit, subreddit, awesome" />
    </Helmet>
    <h2>Reddit</h2>
    <p>This is a page demonstrating the apollo client.</p>
    <SearchInput
      value={inputValue}
      onChange={onChangeInput}
      onSubmit={onSubmitInput}
    />
    {error ? (
      <p>There is no subreddit with that name.</p>
    ) : (isLoading) ? (
      'Loading...'
    ) : hotListings && (
      <TopicList listings={hotListings} />
    )}
  </div>
)
