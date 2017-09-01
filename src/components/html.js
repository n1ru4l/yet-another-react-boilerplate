import React from 'react'

export const Html = ({ content, styles, children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style dangerouslySetInnerHTML={{ __html: styles.css }} />
      <title>Foobars</title>
    </head>
    <body>
      <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
      <script dangerouslySetInnerHTML={{ __html: `window.__EMOTION_IDS__ = ${JSON.stringify(styles.ids)}`}}/>
      <script src="/static/bundle.js" />
    </body>
  </html>
)
