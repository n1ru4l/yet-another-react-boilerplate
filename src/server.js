import React from 'react'
import ReactDOM from 'react-dom/server'
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

  const component = (
    <StaticRouter locaction={request.url} context={context}>
      <Main />
    </StaticRouter>
  )

  const content = ReactDOM.renderToString(component)

  const markup = <Html content={content} />

  response.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(markup)}`)
  response.end()
})

app.listen(PORT, () =>
  console.log(`App Server is now running on http://localhost:${PORT}`)
)
