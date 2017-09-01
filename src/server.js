import React from 'react'
import ReactDOM from 'react-dom/server'
import {
  AsyncComponentProvider,
  createAsyncContext,
} from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import { extractCritical } from 'emotion-server'
import Express from 'express'

import { StaticRouter } from 'react-router'
import path from 'path'
import proxy from 'http-proxy-middleware'
import { Html } from './components/html'
import { Main } from './components/main'

const PORT = 3000

const app = new Express()

if (process.env.NODE_ENV === `production`) {
  app.use(`/static`, Express.static(path.join(process.cwd(), `build/client`)))
} else {
  app.use(
    '/static',
    proxy({ target: 'http://localhost:3020', pathRewrite: { '^/static': '' } })
  )
}

app.use((request, response) => {
  const context = {}

  const asyncContext = createAsyncContext()

  const component = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <StaticRouter location={request.url} context={context}>
        <Main />
      </StaticRouter>
    </AsyncComponentProvider>
  )

  asyncBootstrapper(component).then(() => {
    const content = ReactDOM.renderToString(component)
    const styles = extractCritical(content)
    const asyncState = asyncContext.getState()

    const markup = (
      <Html content={content} styles={styles} asyncState={asyncState} />
    )

    response.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(markup)}`)
    response.end()
  })
})

app.listen(PORT, () =>
  console.log(`App Server is now running on http://localhost:${PORT}`)
)
