import React, { useState, useRef } from 'react'
import { Form } from '../components/form/Form'
import { Input } from '../components/form/Input'
import { Textarea } from '../components/form/Textarea'
import { Select } from '../components/form/Select'
import { SelectOption } from '../components/form/SelectOption'
import { Button } from '../components/form/Button'
import '../styling/advertCreation.css'

// här vill vi lägga till add-formuläret
// (titel, beskrivning, pris, bild, condition, frakt, kategori, kontakt)

/* 
Response from uploaded image
name: "trycatchflow.PNG"
lastModified: 1581449297149
lastModifiedDate: Tue Feb 11 2020 20:28:17 GMT+0100 (centraleuropeisk normaltid) {}
webkitRelativePath: ""
size: 26023
type: "image/png"
*/
const API_URL = "http://localhost:8080/adverts"

export const AdvertCreationPage = () => {
  const [adTitle, setAdTitle] = useState('')
  const [adDescription, setAdDescription] = useState('')
  const [adPrice, setAdPrice] = useState(0)
  const [adImage, setAdImage] = useState(null)
  const [adCondition, setAdCondition] = useState('')
  const [adDelivery, setAdDelivery] = useState('')
  const [adCategory, setAdCategory] = useState('')

  const fileInput = useRef()

  const handleFormSubmit = (event) => {
    event.preventDeafult()
    const formData = new FormData()
    formData.append('image', fileInput.current.files[0])
    formData.append('adTitle', adTitle)

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }

  console.log(adImage)

  return (
    <main>
      <Form onSubmit={handleFormSubmit}>
        <h2 className="page-title">Create ad</h2>
        <Input
          label="Title"
          type="text"
          id="adTitle"
          onChange={(event) => setAdTitle(event.target.value)}
          value={adTitle} />
        <Input
          label="Image"
          type="file"
          ref={fileInput}
          id="adImage"
          onChange={(event) => setAdImage(event.target.files[0])} />
        {adImage && (adImage.name)}

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

        <Button text="Save ad" />
      </Form>
    </main>
  )
}