import React from 'react'
import '../styling/createdUserMessage.css'
import { Link } from 'react-router-dom'

export const CreatedUserMessage = () => {
  return (
    <article className="created-user-container">
      <h1 className="created-user-title">Welcome!</h1>
      <p className="created-user-infotext">Your account was successfully created.</p>
      <Link
        to="/sign-in"
        className="created-user-button">
        Sign in
      </Link>
    </article>
  )
}