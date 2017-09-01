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

import { Main } from './components/main'

const app = (
  <AsyncComponentProvider rehydrateState={window.__ASYNC_STATE__}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </AsyncComponentProvider>
)

const renderApp = () => render(app, document.getElementById(`content`))

const initialRender = () =>
  asyncBootstrapper(app).then(() => {
    return renderApp()
  })

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
