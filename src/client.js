import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'emotion'

import { Main } from './components/main'

const rerender = () =>
  render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    document.getElementById(`content`)
  )

if (window.__EMOTION_IDS__) {
  hydrate(window.__EMOTION_IDS__)
}

if (module.hot) {
  module.hot.accept('./components/main', rerender)
}

rerender()
