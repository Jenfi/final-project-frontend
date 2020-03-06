import React, { useState } from 'react'
import { Form } from '../form/Form'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import './signInForm.css'

export const SignInForm = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSignIn = (event) => {
    event.preventDefault()
  }

  return (
    <Form className="sign-in-form" onSubmit={handleSignIn}>
      <h2 className="sign-in-heading">Sign in</h2>
      <Input
        label="Email"
        type="email"
        id="userEmail"
        onChange={(event) => setUserEmail(event.target.value)}
        value={userEmail} />
      <Input
        label="Password"
        type="password"
        id="userPassword"
        onChange={(event) => setUserPassword(event.target.value)}
        value={userPassword} />
      <Button text="Sign in" />
    </Form>
  )
}