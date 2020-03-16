import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/form/Form'
import { Input } from '../components/form/Input'
import { Button } from '../components/form/Button'
import { CreatedUserMessage } from '../components/CreatedUserMessage'
import '../styling/form.css'

export const RegisterPage = () => {
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
      {success && <CreatedUserMessage />}
      {!success && (
        <>
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
            <p className="change-form">Already a member? <Link to="/sign-in">Sign in</Link></p>
          </Form>
        </>
      )}
    </>
  )
}