import React from 'react'
import { Route } from 'react-router'

const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code
      return children
    }}
  />
)

export const NotFound404 = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)
