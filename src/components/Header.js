import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/header.css'

export const Header = () => {
  return (
    <header>
      <h1 className="site-title"><Link to="/">HAGGLE</Link></h1>
      <div className="user-container">
        {/* if signed in render <icon> <p>{user.name}</p> */}
        <Link to="/sign-in" className="sign-in-link">Sign in</Link>
        <Link to="/registration" className="registration-link">Register</Link>
      </div>
    </header>
  )
}