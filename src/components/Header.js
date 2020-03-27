import { ReactComponent as CreateAd } from 'assets/images/add-ad.svg'
import { ReactComponent as User } from 'assets/images/user.svg'
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
      <h1 className="site-title">
        <Link to="/">HAGGLE</Link>
      </h1>
      <div className="user-options-container">
        <Link
          className="user-options-link"
          to="/create-ad">
          <CreateAd aria-hidden="true" />
          Create ad
        </Link>

        {props.isLoggedIn && (
          <>
            <Link className="user-options-link" to="/profile">
              <User aria-hidden="true" />
              My Profile
            </Link>
            <button
              type="button"
              className="sign-out-button"
              onClick={handleSignOut}>
              Sign out
            </button>
          </>
        )}

        {!props.isLoggedIn && (
          <>
            <Link
              to="/sign-in"
              className="user-options-link">
              Sign in
            </Link>
            <Link
              to="/register"
              className="user-options-link">
              Register
            </Link>
          </>
        )}

      </div>
    </header>
  )
}