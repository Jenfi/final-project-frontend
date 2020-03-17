import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticatedUser } from '../services/auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) => (
      isAuthenticatedUser()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
    )} />

}