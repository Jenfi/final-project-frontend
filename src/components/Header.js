import { ReactComponent as CreateAd } from 'assets/images/add-ad.svg'
import { ReactComponent as User } from 'assets/images/user.svg'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/header.css'

{/* <div>Icons made by <a href="https://www.flaticon.com/authors/chanut" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */ }

export const Header = (props) => {

  const handleSignOut = () => {
    localStorage.clear()
    props.setLogInState()
  }

  return (
    <header>
      <h1 className="site-title"><Link to="/">HAGGLE</Link></h1>
      <div className="user-container">
        <Link
          className="call-to-action"
          to="/create-ad">
          <CreateAd aria-label="hidden" />
          Create ad
        </Link>

        {props.isLoggedIn && (
          <>
            <Link className="call-to-action" to="/profile">
              <User aria-label="Go to Profile" />
              My Profile
            </Link>
            <button type="button"
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
              className="sign-in-link">
              Sign in
            </Link>
            <Link
              to="/register"
              className="registration-link">
              Register
            </Link>
          </>
        )}

      </div>
    </header>
  )
}