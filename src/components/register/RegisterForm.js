import React, { useState } from 'react'
import { Form } from '../form/Form'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import './registerForm.css'

export const RegisterForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleRegistration = (event) => {
    event.preventDefault()
  }

  return (
    <Form className="register-form" onSubmit={handleRegistration}>
      <h2 className="register-heading">Register</h2>
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
      <Button text="Register" />
    </Form>
  )
}