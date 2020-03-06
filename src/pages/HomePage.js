import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/homepage.css'
import '../styling/adListing.css'
import yellowchair from '../assets/images/yellowchair.jpeg'

/* På homepage vill vi ha en beksrivning av sidan, menu bar, en hero-section,
lista med ads, modal-box, footer, header
*/

export const HomePage = () => {
  return (
    <>
      <section className="hero">
        <h2 className="hero-title">Furniture made easy.</h2>
        <p className="hero-tagline">We help you sell your used furniture and give them a new home.</p>
        <button type="button" className="CTA-button">Start selling</button>
      </section>
      <section className="ad-listing">
        <h2 className="ad-listing-header">Recently added</h2>

        <article className="ad-card">
          <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          <h3>Ad title</h3>
          <p className="price-tag">200:-</p>
        </article>
        <article className="ad-card">
          <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          <h3>Ad title</h3>
          <p className="price-tag">200:-</p>
        </article>
        <article className="ad-card">
          <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          <h3>Ad title</h3>
          <p className="price-tag">200:-</p>
        </article>
        <article className="ad-card">
          <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          <h3>Ad title</h3>
          <p className="price-tag">200:-</p>
        </article>
        <article className="ad-card">
          <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          <h3>Ad title</h3>
          <p className="price-tag">200:-</p>
        </article>
        <article className="ad-card">
          <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          <h3>Ad title</h3>
          <p className="price-tag">200:-</p>
        </article>
        <p className="ads-navigation">
          <Link to="/adverts">All ads</Link>
        </p>
      </section>
    </>
  )
}