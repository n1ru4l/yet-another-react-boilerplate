import React from 'react'

import { SearchInput } from './search-input'
import { TopicList } from './topic-list'

export const View = ({
  isLoading,
  error,
  hotListings,
  inputValue,
  onChangeInput,
  onSubmitInput,
}) => (
  <div>
    <h2>Reddit</h2>
    <p>This is a page demonstrating the apollo client.</p>
    <SearchInput
      value={inputValue}
      onChange={onChangeInput}
      onSubmit={onSubmitInput}
    />
    {error 
      ? <p>There is no subreddit with that name.</p>
      : isLoading
        ? 'Loading...'
        : <TopicList listings={hotListings} />}
  </div>
)
