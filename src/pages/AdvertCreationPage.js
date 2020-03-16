import React, { useState, useRef } from 'react'
import { Form } from '../components/form/Form'
import { Input } from '../components/form/Input'
import { Textarea } from '../components/form/Textarea'
import { Select } from '../components/form/Select'
import { SelectOption } from '../components/form/SelectOption'
import { Button } from '../components/form/Button'
import { CreatedAdMessage } from '../components/CreatedAdMessage'
import '../styling/form.css'

// här vill vi lägga till add-formuläret
// (titel, beskrivning, pris, bild, condition, frakt, kategori, kontakt)

const API_URL = 'http://localhost:8080/adverts'

export const AdvertCreationPage = () => {
  const [successfulCreation, setSuccessfulCreation] = useState(false)
  const [adTitle, setAdTitle] = useState('')
  const [adDescription, setAdDescription] = useState('')
  const [adPrice, setAdPrice] = useState(0)
  const [adCondition, setAdCondition] = useState('')
  const [adDelivery, setAdDelivery] = useState('')
  const [adCategory, setAdCategory] = useState('')

  const fileInput = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(fileInput.current.files[0])
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('title', adTitle)
    formData.append('description', adDescription)
    formData.append('price', adPrice)
    formData.append('delivery', adDelivery)
    formData.append('category', adCategory)
    formData.append('condition', adCondition)

    const accessToken = window.localStorage.getItem('accessToken')
    console.log(formData)
    fetch(API_URL, { method: 'POST', body: formData, headers: { 'Authorization': accessToken } })
      .then((res) => res.json())
      .then((json) => {
        json.created ? setSuccessfulCreation(true) : setSuccessfulCreation(false)
        console.log(json)
      })
  }

  return (
    <>
      {successfulCreation && <CreatedAdMessage />}
      {!successfulCreation && (
        <Form onSubmit={handleFormSubmit} className="ad-form">
          <h2 className="ad-form-heading">Create ad</h2>
          <Input
            label="Title"
            type="text"
            id="adTitle"
            onChange={(event) => setAdTitle(event.target.value)}
            value={adTitle} />
          <label htmlFor="fileInput">
            Product image
          <input type="file" ref={fileInput} id="fileInput" />
          </label>
          <Select
            label="Category"
            id="adCategory"
            value={adCategory}
            onChange={(event) => setAdCategory(event.target.value)}>
            <SelectOption
              value="Textiles"
              option="Textiles" />
            <SelectOption
              value="Lightning"
              option="Lightning" />
            <SelectOption
              value="Decoration"
              option="Decoration" />
            <SelectOption
              value="Rugs"
              option="Rugs" />
            <SelectOption
              value="Furniture"
              option="Furniture" />
          </Select>
          <Select
            label="Condition"
            id="adCondition"
            value={adCondition}
            onChange={(event) => setAdCondition(event.target.value)}>
            <SelectOption
              value="As new"
              option="As new" />
            <SelectOption
              value="Good"
              option="Good" />
            <SelectOption
              value="Used"
              option="Used" />
            <SelectOption
              value="Needs alterations"
              option="Needs alterations" />
          </Select>

          <Textarea
            label="Description"
            id={adDescription}
            value={adDescription}
            onChange={(event) => setAdDescription(event.target.value)}
            rows="10" />

          <Input
            label="Price"
            type="text"
            id="adPrice"
            onChange={(event) => setAdPrice(event.target.value)}
            value={adPrice} />

          <Select
            label="Delivery"
            id="adDelivery"
            value={adDelivery}
            onChange={(event) => setAdDelivery(event.target.value)}>
            <SelectOption
              value="Pick up"
              option="Pick up" />
            <SelectOption
              value="Meet up"
              option="Meet up" />
            <SelectOption
              value="Ship"
              option="Ship" />
          </Select>

          <button type="submit">Save ad</button>
        </Form>
      )}
    </>
  )
}