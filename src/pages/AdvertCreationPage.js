import React, { useRef, useState } from 'react'
import { CreatedAdMessage } from '../components/CreatedAdMessage'
import { Form } from '../components/form/Form'
import { Input } from '../components/form/Input'
import { Select } from '../components/form/Select'
import { SelectOption } from '../components/form/SelectOption'
import { Textarea } from '../components/form/Textarea'
import '../styling/form.css'


const API_URL = 'http://localhost:8080/adverts'

export const AdvertCreationPage = () => {
  const [successfulCreation, setSuccessfulCreation] = useState(false)
  const [adId, setAdId] = useState('')
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

        if (json.adId) {
          setAdId(json.adId)
        }

        console.log(json)
      })
  }

  return (
    <>
      {successfulCreation && <CreatedAdMessage adId={adId} />}
      {!successfulCreation && (
        <Form onSubmit={handleFormSubmit} className="ad-form">
          <h2 className="ad-form-heading">Create ad</h2>
          <Input
            className="required-input"
            id="adTitle"
            label="Title"
            minLength="3"
            maxLength="50"
            onChange={(event) => setAdTitle(event.target.value)}
            type="text"
            value={adTitle}
            required="required"
            requirements="Title must be 3–50 characters long." />
          <label htmlFor="fileInput">
            <span className="required-input">Product image</span>
            <input
              accept="image/png, image/jpeg, image/jpg"
              id="fileInput"
              ref={fileInput}
              required
              type="file"
            />
            <span className="requirements">Ads must have an image.</span>
          </label>
          <Select
            className="required-input"
            id="adCategory"
            label="Category"
            onChange={(event) => setAdCategory(event.target.value)}
            required="required"
            requirements="Select a category from the list"
            value={adCategory} >
            <SelectOption
              disabled="disabled"
              option="Select a product category"
              value="" />
            <SelectOption
              option="Textiles"
              value="Textiles" />
            <SelectOption
              option="Lightning"
              value="Lightning" />
            <SelectOption
              option="Decoration"
              value="Decoration" />
            <SelectOption
              option="Rugs"
              value="Rugs" />
            <SelectOption
              option="Furniture"
              value="Furniture" />
          </Select>
          <Select
            className="required-input"
            id="adCondition"
            label="Condition"
            value={adCondition}
            onChange={(event) => setAdCondition(event.target.value)}
            required="required"
            requirements="Select the condition your product is in.">
            <SelectOption
              disabled="disabled"
              option="Select a condition"
              value="" />
            <SelectOption
              option="As new"
              value="As new" />
            <SelectOption
              option="Good"
              value="Good" />
            <SelectOption
              option="Used"
              value="Used" />
            <SelectOption
              option="Needs alterations"
              value="Needs alterations" />
          </Select>

          <Textarea
            className="required-input"
            id={adDescription}
            label="Description, max 600 characters"
            minLength="3"
            maxLength="600"
            value={adDescription}
            onChange={(event) => setAdDescription(event.target.value)}
            rows="10"
            required="required"
            requirements="Description must be 3–600 characters long." />

          <Input
            className="required-input"
            id="adPrice"
            label="Price"
            type="number"
            min="1"
            onChange={(event) => setAdPrice(event.target.value)}
            value={adPrice}
            required="required"
            requirements="Price must be 1 SEK or higher."
          />

          <Select
            className="required-input"
            id="adDelivery"
            label="Delivery"
            onChange={(event) => setAdDelivery(event.target.value)}
            required="required"
            requirements="Select a delivery from the list"
            value={adDelivery}>
            <SelectOption
              disabled="disabled"
              option="Select delivery"
              value="" />
            <SelectOption
              option="Pick up"
              value="Pick up" />
            <SelectOption
              option="Meet up"
              value="Meet up" />
            <SelectOption
              option="Ship"
              value="Ship" />
          </Select>
          <button
            type="submit">
            Save ad
            </button>
        </Form>
      )
      }
    </>
  )
}