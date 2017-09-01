import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { Switch, Route } from 'react-router'
import { asyncComponent } from 'react-async-component'

import { Header } from './header'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body {
    margin: 0;
  }
`

const HomeLoadable = asyncComponent({
  resolve: () => import(`./home`).then(({ Home }) => Home),
  LoadingComponent: () => <div>Loading...</div>,
})

const AboutLoadable = asyncComponent({
  resolve: () => import(`./about`).then(({ About }) => About),
  LoadingComponent: () => <div>Loading...</div>,
})

const StyledContentContainer = styled(`div`)`
  margin-left: 20px;
  margin-right: 20px;
`

export const Main = () => (
  <div>
    <Header />
    <StyledContentContainer>
      <Switch>
        <Route path="/home" component={HomeLoadable} />
        <Route path="/about" component={AboutLoadable} />
      </Switch>
    </StyledContentContainer>
  </div>
)
