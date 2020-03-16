import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/form/Form'
import { Input } from '../components/form/Input'
import { Button } from '../components/form/Button'
import '../styling/form.css'

export const SignInPage = () => {
  const [userInput, setUserInput] = useState({})
  const AUTH_URL = 'http://localhost:8080/sessions'

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
      <p className="change-form">Not a member? <Link to="/register">Register</Link></p>
    </Form>
  )
}