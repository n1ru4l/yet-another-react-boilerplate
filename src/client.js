import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'emotion'
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import { ApolloProvider } from 'react-apollo'
import { createApolloClient } from './lib/create-apollo-client'

import { Main } from './components/main'

const apolloClient = createApolloClient({
  initialState: window.__APOLLO_STATE__ || {},
})

const rehydrateState = window.__ASYNC_STATE__ || {}

const app = (
  <AsyncComponentProvider rehydrateState={rehydrateState}>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ApolloProvider>
  </AsyncComponentProvider>
)

const renderApp = () => render(app, document.getElementById(`content`))

const initialRender = () => asyncBootstrapper(app).then(renderApp)

if (window.__EMOTION_IDS__) {
  hydrate(window.__EMOTION_IDS__)
}

if (process.env.NODE_ENV !== `production`) {
  const renderHot = rootElement => {
    render(
      <AppContainer key={Math.random()}>{app}</AppContainer>,
      document.getElementById(`content`)
    )
  }

  if (module.hot) {
    module.hot.accept('./components/main', renderHot)
  }
}

initialRender()
