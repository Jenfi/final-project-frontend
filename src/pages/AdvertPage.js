import React from 'react'
import '../styling/advertPage.css'
import topImage from '../assets/images/yellowchair.jpeg'

// Här vill vi ha en bild, pris, namn på vara, beskrivning av vara,
// information om säljare, publiceringsdatum, leveransinfo (katergori), condition, bread crumbs

export const AdvertPage = () => {
  return (
    <main>
      <article className="product">
        <img src={topImage} alt="An orange chair" className="product-image" />
        <h2 className="product-name">Descriptive ad title a longer title about some furniture - and even moooooooreeeeeeeeeeeeeeeeeeee</h2>
        <p className="product-price">200 kr</p>
        <section className="product-description product-section">
          <h3 className="product-section-heading">Description</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut massa quis orci.
          </p>
        </section>
        <section className="product-details product-section">
          <h3 className="product-section-heading">Product details</h3>
          <ul className="product-details-list">
            <li><span className="product-attribute">Category:</span> Furniture</li>
            <li><span className="product-attribute">Color:</span> Orange</li>
            <li><span className="product-attribute">Condition:</span> As new</li>
          </ul>
        </section>
        <section className="product-buying-details product-section">
          <h3 className="product-section-heading">Buying and shipping</h3>
          <ul className="product-details-list">
            <li><span className="product-attribute">Payment:</span> </li>
            <li><span className="product-attribute">Delivery:</span> Pick up</li>
            <li><span className="product-attribute">Location:</span> Stockholm</li>
          </ul>
        </section>
        <section className="product-seller-details product-section">
          <h3 className="product-section-heading">Sold by</h3>
          <p className="seller">Bobby Bobson</p>
          <button type="button">Contact seller</button>
        </section>
        <p className="publishing-details">Posted: 5 March 2020</p>
      </article>
    </main>
  )
}