import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/header.css'

export const Header = () => {
  return (
    <header>
      <h1 className="site-title"><Link to="/">HAGGLE</Link></h1>
      <div className="user-container">
        {/* if signed in render <icon> <p>{user.name}</p> */}
        <a>Sign in</a>
        <a>Register</a>
      </div>
    </header>
  )
}