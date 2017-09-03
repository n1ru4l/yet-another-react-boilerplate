import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { extractCritical } from 'emotion-server'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import Express from 'express'
import noFavicon from 'express-no-favicons'

import { StaticRouter } from 'react-router'
import path from 'path'
import proxy from 'http-proxy-middleware'
import { createApolloClient } from './lib/create-apollo-client'
import { Html } from './components/html'
import { Main } from './components/main'

const PORT = 3000

const app = new Express()

global.window = {}

app.use(noFavicon())

if (process.env.NODE_ENV === `production`) {
  app.use(`/static`, Express.static(path.join(process.cwd(), `build/client`)))
} else {
  app.use(
    '/static',
    proxy({ target: 'http://localhost:3020', pathRewrite: { '^/static': '' } })
  )
}

app.use(async (request, response) => {
  const client = createApolloClient({
    ssrMode: true,
  })

  const context = {
    status: 200,
  }
  const asyncContext = createAsyncContext()

  const component = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <ApolloProvider client={client}>
        <StaticRouter location={request.url} context={context}>
          <Main />
        </StaticRouter>
      </ApolloProvider>
    </AsyncComponentProvider>
  )

  await asyncBootstrapper(component)

  const content = await renderToStringWithData(component)

  const styles = extractCritical(content)
  const asyncState = asyncContext.getState()
  const apolloState = client.store.getState()

  const markup = (
    <Html
      content={content}
      styles={styles}
      asyncState={asyncState}
      apolloState={apolloState}
    />
  )

  response
    .status(context.status)
    .send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(markup)}`)
  response.end()
})

app.listen(PORT, () =>
  console.log(`App Server is now running on http://localhost:${PORT}`)
)
