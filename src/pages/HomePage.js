import React from 'react'
import "../styling/homepage.css"
import yellowchair from "../assets/images/yellowchair.jpeg"
import "../styling/adcard.css"
import vase from "../assets/images/pot.jpg"
import chair from "../assets/images/green-chair.jpg"
import leatherSofa from "../assets/images/leather-couch.jpg"
import stool from "../assets/images/the-stool.jpg"

//DET HÄR ÄR HOMEPAGE

// här vill vi ha en beksrivning av sidan, menu bar, en hero-section, lista med ads, modal-box, footer, header

export const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="auto-slider">
          <ul className="auto-slider_content">
            <li> <img className="hero-image" src={chair} alt="Chair" /></li>
            <li> <img className="hero-image" src={vase} alt="Vase" /></li>
            <li> <img className="hero-image" src={stool} alt="Chair and stool" /></li>
            <li> <img className="hero-image" src={leatherSofa} alt="Sofa" /></li>
          </ul>
        </div>
        <h2 className="hero-title">Furniture made easy.</h2>
        <p className="hero-tagline">We help you sell your used furniture and give them a new home.</p>
        <button type="button" className="CTA-button">Start selling</button>
      </section>
      <section className="ad-listing">
        <h2 className="ad-listing-header">Recently added</h2>

        <div className="ad-container">
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
          <article className="ad-card">
            <h3>Ad title</h3>
            <img className="ad-image" src={yellowchair} alt="Yellow Chair" />
          </article>
        </div>

      </section>
    </>
  )
}