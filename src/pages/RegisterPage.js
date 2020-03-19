import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/form/Form'
import { Input } from '../components/form/Input'
import { Button } from '../components/form/Button'
import { CreatedUserMessage } from '../components/CreatedUserMessage'
import { registerUser } from '../services/auth'
import '../styling/form.css'

export const RegisterPage = (props) => {
  const [userInput, setUserInput] = useState({})
  const [success, setSuccess] = useState(false)

  const handleInputChange = (event) => setUserInput({
    ...userInput,
    [event.currentTarget.name]: event.currentTarget.value
  })

  const handleRegistration = (event) => {
    event.preventDefault()
    registerUser(userInput)
      .then((user) => {
        user.error ? setSuccess(false) : setSuccess(true)
      })
  }

  return (
    <>
      {success && <CreatedUserMessage />}
      {!success && (
        <>
          <Form className="register-form" onSubmit={handleRegistration}>
            <h2 className="register-heading">Register</h2>
            <Input
              className="required-input"
              id="userName"
              label="Name"
              minLength="2"
              maxLength="50"
              name="name"
              onChange={handleInputChange}
              required="required"
              requirements="You must add your name."
              type="text" />
            <Input
              className="required-input"
              id="userEmail"
              label="Email"
              minLength="5"
              name="email"
              onChange={handleInputChange}
              required="required"
              requirements="You must add a valid email."
              type="email" />
            <Input
              className="required-input"
              id="userPassword"
              label="Password (minimum 8 characters)"
              onChange={handleInputChange}
              minLength="8"
              name="password"
              required="required"
              requirements="Create a safe password of at least 8 characters."
              type="password" />
            <Button text="Register" />
            <p className="change-form">
              Already a member? <Link to="/sign-in">Sign in</Link>
            </p>
          </Form>
        </>
      )}
    </>
  )
}