import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

const StyledHeader = styled(`header`)`
  padding: 20px;
  background-color: black;
  color: white;
`

export const Header = () => (
  <StyledHeader>
    <h1>Scurr burr</h1>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </StyledHeader>
)
