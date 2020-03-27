import React from 'react'
import '../styling/createdAdMessage.css'
import { Link } from 'react-router-dom'

export const CreatedAdMessage = (props) => {
  return (
    <article className="created-ad-container">
      <h1 className="created-ad-message-title">Nice!</h1>
      <p className="created-ad-infotext">Your ad is now published.</p>
      <Link
        to={`/adverts/${props.adId}`}
        className="created-ad-button">
        View ad
      </Link>
    </article>
  )
}