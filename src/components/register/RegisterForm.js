import React, { useState } from 'react'
import { Form } from '../form/Form'
import { Input } from '../form/Input'
import { Button } from '../form/Button'
import './registerForm.css'



export const RegisterForm = () => {
  const [userInput, setUserInput] = useState({})
  const [success, setSuccess] = useState(false)

  const handleInputChange = (event) => setUserInput({
    ...userInput,
    [event.currentTarget.name]: event.currentTarget.value
  })

  const registerUser = (registrationData) => {
    fetch('http://localhost:8080/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registrationData)
    })
      .then((res) => res.json())
      .then((json) => {
        json.error ? setSuccess(false) : setSuccess(true)
        console.log(json)
      })
  }

  const handleRegistration = (event) => {
    event.preventDefault()
    registerUser(userInput)
  }

  return (
    <>
      {success && (
        <div className="success">
          <h2>Welcome to Haggle!</h2>
          <p>You can now sign in and create some ads.</p>
        </div>)}
      {!success && (
        <Form className="register-form" onSubmit={handleRegistration}>
          <h2 className="register-heading">Register</h2>
          <Input
            label="Name"
            type="text"
            id="userName"
            name="name"
            onChange={handleInputChange} />
          <Input
            label="Email"
            type="email"
            id="userEmail"
            onChange={handleInputChange}
            name="email" />
          <Input
            label="Password"
            type="password"
            id="userPassword"
            onChange={handleInputChange}
            name="password" />
          <Button text="Register" />
        </Form>
      )}
    </>
  )
}