import React from 'react'

export const SearchInput = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div>
      Enter the name of a subreddit: {` `}
      <input type="text" name="subreddit" value={value} onChange={onChange} />
      <button type="submit">Load</button>
    </div>
  </form>
)
