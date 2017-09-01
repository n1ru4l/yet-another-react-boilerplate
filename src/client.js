import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Main } from './components/main'

const rerender = () => render((
  <BrowserRouter>
    <Main />
  </BrowserRouter>
), document.getElementById(`content`))

if (module.hot) {
  module.hot.accept('./components/main', rerender)
}