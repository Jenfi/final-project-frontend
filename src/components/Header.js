import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/header.css'

export const Header = (props) => {
  const handleSignOut = () => {
    localStorage.clear()
    props.setLogInState()
  }

  return (
    <header>
      <h1 className="site-title"><Link to="/">HAGGLE</Link></h1>
      <div className="user-container">
        {/* if signed in render <icon> <p>{user.name}</p> */}
        {props.isLoggedIn && (
          <button type="button" onClick={handleSignOut}>Sign out</button>
        )}
        {!props.isLoggedIn && (
          <>
            <Link to="/sign-in" className="sign-in-link">Sign in</Link>
            <Link to="/register" className="registration-link">Register</Link>
          </>
        )}

      </div>
    </header>
  )
}