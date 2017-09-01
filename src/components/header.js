import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

const StyledHeader = styled(`header`)`
  padding: 20px;
  background: linear-gradient(to right, #cb356b, #bd3f32);
  color: white;
`

const StyledNav = styled(`nav`)`
  > a {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
  }
  > a:hover {
    color: #eeaeee;
  }
`

export const Header = () => (
  <StyledHeader>
    <h1>Yet Another React Boilerplate</h1>
    <StyledNav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </StyledNav>
  </StyledHeader>
)
