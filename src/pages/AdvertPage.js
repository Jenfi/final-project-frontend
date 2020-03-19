import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { fetchData } from '../services/api'
import { Spinner } from '../components/Spinner'
import '../styling/advertPage.css'
import { ReactComponent as Mail } from '../assets/images/mail.svg'

// Här vill vi ha en bild, pris, namn på vara, beskrivning av vara,
// information om säljare, publiceringsdatum, leveransinfo (katergori), condition, bread crumbs

export const AdvertPage = () => {
  const [advert, setAdvert] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { advertId } = useParams()

  const AD_URL = `${process.env.REACT_APP_API_ADVERTS}/${advertId}`

  useEffect(() => {
    setIsLoading(true)
    fetchData(AD_URL)
      .then((adData) => {
        setAdvert(adData)
        setIsLoading(false)
      })
  }, [AD_URL])

  console.log(advert)

  return (
    <>
      {!isLoading && (
        <article className="product">
          {isLoading ? <Spinner /> : <img className="product-image" src={advert.product.imageUrl} alt={advert.product.title} />}
          <h2 className="product-name">{advert.product.title}</h2>
          <p className="product-price">{advert.product.price} SEK</p>
          <section className="product-description product-section">
            <h3 className="product-section-heading">Product details</h3>
            <p>
              {advert.product.description}
            </p>
            <ul className="product-details-list">
              <li><span className="product-attribute">Condition:</span> {advert.product.condition}</li>
              <li><span className="product-attribute">Category:</span> {advert.product.category}</li>
            </ul>
          </section>
          <section className="product-buying-details product-section">
            <h3 className="product-section-heading">Buying and shipping</h3>
            <ul className="product-details-list">
              <li><span className="product-attribute">Delivery:</span> {advert.product.delivery}</li>
              <li><span className="product-attribute">Seller:</span> {advert.seller.name}</li>
            </ul>
            <a className="contact-seller" href={`mailto:${advert.seller.email}?subject=I want buy your product: ${advert.product.title} (${advert.product._id})`}><Mail />Contact seller</a>
          </section>
          <p className="publishing-details">{`Posted: ${moment(advert.product.publishedDate).format("dddd, MMMM Do YYYY, H:mm ")}`}</p>
        </article>
      )}

    </>
  )
}