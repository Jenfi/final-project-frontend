import React from 'react'
import '../styling/notFound.css'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <article className="not-found-container">
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-infotext">The site you are trying to reach was not found.</p>
      <Link to="/" className="back-button">Back to homepage </Link>
    </article>
  )
}
