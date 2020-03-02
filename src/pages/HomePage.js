import React from 'react'
import "../styling/homepage.css"

//DET HÄR ÄR HOMEPAGE

// här vill vi ha en beksrivning av sidan, menu bar, en hero-section, lista med ads, modal-box, footer, header

export const HomePage = () => {
  return (
    <section className="hero">
      <h2 className="hero-title">Furniture made easy.</h2>
      <p className="hero-tagline">We help you sell your used furniture and give them a new home.</p>
      <button type="button" className="CTA-button">Start selling</button>
    </section>
  )
}