import React from 'react'

const TopicListItem = ({ title, commentCount }) => (
  <li>{`${title} (${commentCount})`}</li>
)

export const TopicList = ({ listings }) => (
  <ul>
    {listings.map(listing => (
      <TopicListItem
        title={listing.title}
        commentCount={listing.numComments}
        key={listing.fullnameId}
      />
    ))}
  </ul>
)
