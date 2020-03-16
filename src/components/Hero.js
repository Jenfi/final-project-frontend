import React from 'react'
import vase from '../assets/images/potBIG.jpg'
import chair from '../assets/images/chairBIG.jpg'
import leatherSofa from '../assets/images/leather-sofaBIG.jpg'
import stool from '../assets/images/stoolBIG.jpg'
import lamp from '../assets/images/lampBIG.jpg'

export const Hero = () => {

  return (
    <section className="hero">
      <div className="auto-slider">
        <ul className="auto-slider_content">
          <li> <img className="hero-image" src={chair} alt="Chair" /></li>
          <li> <img className="hero-image" src={vase} alt="Vase" /></li>
          <li> <img className="hero-image" src={stool} alt="Chair and stool" /></li>
          <li> <img className="hero-image" src={leatherSofa} alt="Sofa" /></li>
          <li> <img className="hero-image" src={lamp} alt="Lamp" /></li>
        </ul>
      </div>
      <div className="hero-strip-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-title">Furniture made easy.</h2>
        <p className="hero-tagline">We help you sell your used furniture and give them a new home.</p>
        <button type="button" className="CTA-button">Start selling</button>
      </div>
    </section>
  )
}