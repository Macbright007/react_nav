import React from 'react'
import { Navigation, NavItems } from './styles'

const Nav = () => {
  return (
    <Navigation>
      <h1><span>Be.</span>blog</h1>

      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <NavItems>
        <button>LogIn</button>
      </NavItems>
    </Navigation>
  )
}

export default Nav