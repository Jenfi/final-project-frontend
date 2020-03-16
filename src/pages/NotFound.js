import React from 'react'
import '../styling/notFound.css'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <main className="errorPage">
            <article className="error-message-container">
                <h1 className="not-found-page-title">Page not found</h1>
                <p className="not-found-info-text">The site you are trying to reach was not found.</p>
                <Link to="/" className="back-to-homepage">Back to homepage </Link>
            </article>

        </main>
    )
}
