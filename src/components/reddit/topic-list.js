// @flow
import React from 'react'
import type { HotListing } from './types'

type TopicListItemProps = {
  title: string,
  commentCount: number,
}

const TopicListItem = ({ title, commentCount }: TopicListItemProps) => (
  <li>{`${title} (${commentCount})`}</li>
)

type TopicListProps = {
  listings: Array<HotListing>
}

export const TopicList = ({ listings }: TopicListProps) => (
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
