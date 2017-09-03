import React from 'react'

export const Html = ({
  content,
  styles,
  children,
  asyncState,
  apolloState,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style dangerouslySetInnerHTML={{ __html: styles.css }} />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <title>Yet Another React Boilerplate</title>
    </head>
    <body>
      <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__EMOTION_IDS__ = ${JSON.stringify(styles.ids)}`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__ = ${JSON.stringify(apolloState)}`,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__ASYNC_STATE__ = ${JSON.stringify(asyncState)}`,
        }}
      />
      <script src="/static/bundle.js" />
    </body>
  </html>
)
