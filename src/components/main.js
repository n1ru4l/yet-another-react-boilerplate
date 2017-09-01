import React from 'react'
import { injectGlobal } from 'emotion'
import { Switch, Route } from 'react-router' 

import { Header } from './header'
import { Home } from './home'
import { About } from './about'


injectGlobal`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
  }
`

export const Main = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </div>
)
