import React from 'react'
import '../styling/createdAdMessage.css'
import { Link } from 'react-router-dom'

export const createdAdMessage = () => {
    return (
        <article className="created-ad-container">
            <h1 className="ad-created-message-title">Nice!</h1>
            <p className="ad-created-infotext">Your ad is now published.</p>
            <Link to="/adverts" className="to-adverts-list">View all listings </Link>
        </article>
    )
}