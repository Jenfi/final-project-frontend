import React, { useState } from 'react'
import { Form } from '../form/Form'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import './signUpForm.css'

export const SignUpForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSignUp = (event) => {
    event.preventDefault()
  }

  return (
    <Form className="sign-up-form" onSubmit={handleSignUp}>
      <h2 className="sign-up-heading">Sign up</h2>
      <Input
        label="Name"
        type="text"
        id="userName"
        onChange={(event) => setUserName(event.target.value)}
        value={userName} />
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
      <Button text="Sign up" />
    </Form>
  )
}