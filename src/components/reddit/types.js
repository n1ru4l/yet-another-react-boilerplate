// @flow

export type ViewStateProps = {
  inputValue: string,
  subreddit: string,
  onChangeInput: (ev: Event) => void,
  onSubmitInput: (ev: Event) => void,
}

export type HotListing = {
  fullnameId: string,
  title: string,
  numComments: number,
}

type ViewStates = {
  error: boolean,
  isLoading: boolean,
  hotListings: Array<HotListing>,
}


export type ViewProps = ViewStateProps & ViewStates
