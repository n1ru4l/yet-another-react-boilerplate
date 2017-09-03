import React from 'react'

import { View } from './view'
import { withSubredditData } from './with-subreddit-data'

const ViewWithData = withSubredditData(View)

export class Reddit extends React.Component {

  state = {
    subreddit: `movies`,
    inputValue: `movies`,
  }

  onChangeInput = ev => {
    this.setState({ inputValue: ev.target.value })
  }

  onSubmitInput = ev => {
    const { inputValue } = this.state
    this.setState({ subreddit: inputValue })
    console.log(inputValue)
    ev.preventDefault()
  }

  render() {
    const { inputValue, subreddit } = this.state
    return (
      <ViewWithData
        subreddit={subreddit}
        inputValue={inputValue}
        onChangeInput={this.onChangeInput}
        onSubmitInput={this.onSubmitInput}
      />
    )
  }
}
