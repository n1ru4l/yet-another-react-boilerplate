import React from 'react'
import { Helmet } from 'react-helmet'

export const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h2>Hello World</h2>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
    <h2>What's included?</h2>
    <ul>
      <li>🚀 &nbsp;React Router</li>
      <li>💅 &nbsp;Emotion</li>
      <li>🐛 &nbsp;Async Routes</li>
      <li>💯 &nbsp;Full SSR Setup</li>
    </ul>
  </div>
)

export default Home
