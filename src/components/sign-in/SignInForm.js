import React, { useState } from 'react'
import { Form } from '../form/Form'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import './signInForm.css'

const AUTH_URL = 'http://localhost:8080/sessions'

export const SignInForm = () => {
  const [userInput, setUserInput] = useState({})

  const signInUser = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(AUTH_URL, options)
    const json = await response.json()
    return json
  }

  const handleSignIn = (event) => {
    event.preventDefault()
    signInUser()
      .then((user) => {
        if (user.notFound) {
          console.log('Username or password is invalid')
        } else {
          window.localStorage.setItem('accessToken', user.accessToken)
          console.log('User signed in')
        }
      })
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