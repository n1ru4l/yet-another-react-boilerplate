import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { Switch, Route } from 'react-router'
import { asyncComponent } from 'react-async-component'

import { Header } from './header'
import { Helmet } from 'react-helmet'
import { NotFound404 } from './not-found-404'

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

const LoadingComponent = () => <div>Loading...</div>

const HomeLoadable = asyncComponent({
  resolve: () => import(`./home`).then(({ Home }) => Home),
  LoadingComponent,
})

const AboutLoadable = asyncComponent({
  resolve: () => import(`./about`).then(({ About }) => About),
  LoadingComponent,
})

const RedditLoadable = asyncComponent({
  resolve: () => import(`./reddit`).then(({ Reddit }) => Reddit),
  LoadingComponent,
})

const StyledContentContainer = styled(`div`)`
  margin-left: 20px;
  margin-right: 20px;
`

export const Main = () => (
  <div>
    <Helmet
      titleTemplate="%s | Yet Another React Boilerplate"
      defaultTitle="Yet Another React Boilerplate"
    />
    <Header />
    <StyledContentContainer>
      <Switch>
        <Route path="/home" component={HomeLoadable} />
        <Route path="/about" component={AboutLoadable} />
        <Route path="/reddit" component={RedditLoadable} />
        <Route component={NotFound404} />
      </Switch>
    </StyledContentContainer>
  </div>
)
