import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { authenticateUser, isAuthenticatedUser } from '../../services/auth'
import { Form } from '../form/Form'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import './signInForm.css'

const SignInForm = (props) => {
  const [userInput, setUserInput] = useState({})

  const handleSignIn = (event) => {
    event.preventDefault()
    authenticateUser(userInput)
    if (isAuthenticatedUser()) {
      props.history.push('/')
    }
  }
  const handleInputChange = (event) => setUserInput({
    ...userInput,
    [event.currentTarget.name]: event.currentTarget.value
  })

  return (
    <Form className="sign-in-form" onSubmit={handleSignIn}>
      <h2 className="sign-in-heading">Sign in</h2>
      <Input
        label="Email"
        name="email"
        type="email"
        id="userEmail"
        onChange={handleInputChange} />
      <Input
        label="Password"
        type="password"
        name="password"
        id="userPassword"
        onChange={handleInputChange} />
      <Button text="Sign in" />
    </Form>
  )
}

export default withRouter(SignInForm)