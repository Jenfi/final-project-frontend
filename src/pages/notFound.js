import React from 'react'
import '../styling/notFound.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

export const notFound = () => {
    return (
        <main className="errorPage">
            <p>ERROR!</p>
            <p>The site you are trying to reach was not found.</p>
        </main>
    )
}
