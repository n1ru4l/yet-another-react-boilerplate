// @flow
import React from 'react'

type SearchInputProps = {
  value: string,
  onChange: (ev: Event) => void,
  onSubmit: (ev: Event) => void,
}

export const SearchInput = ({ value, onChange, onSubmit }: SearchInputProps) => (
  <form onSubmit={onSubmit}>
    <div>
      Enter the name of a subreddit: {` `}
      <input type="text" name="subreddit" value={value} onChange={onChange} />
      <button type="submit">Load</button>
    </div>
  </form>
)
