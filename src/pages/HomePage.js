import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import '../styling/homepage.css'
import yellowchair from '../assets/images/yellowchair.jpeg'
import '../styling/adListing.css'
import vase from '../assets/images/potBIG.jpg'
import chair from '../assets/images/chairBIG.jpg'
import leatherSofa from '../assets/images/leather-sofaBIG.jpg'
import stool from '../assets/images/stoolBIG.jpg'
import lamp from '../assets/images/lampBIG.jpg'

// DET HÄR ÄR HOMEPAGE

// här vill vi ha en beksrivning av sidan, menu bar, en hero-section, lista med ads, modal-box, footer, header

export const HomePage = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/adverts').then((res) => res.json()).then((json) => { setAds(json) })
  }, [])

  return (
    <>
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
        <div className="hero-content">
          <h2 className="hero-title">Furniture made easy.</h2>
          <p className="hero-tagline">We help you sell your used furniture and give them a new home.</p>
          <button type="button" className="CTA-button">Start selling</button>
        </div>
      </section>
      <section className="recent-ads">
        <h2 className="ad-listing-header">Recently added</h2>

        <CardList className="ad-listing">
          {ads.map(ad => (
            <Card className="ad-card" key={ad._id}>
              <CardImage className="ad-image" src={ad.imageUrl} alt={ad.title} />
              <Heading level="3" className="ad-title">
                <CardLink to={`/adverts/${ad._id}`}>{ad.title}</CardLink></Heading>
              <Text className="price-tag">{ad.price}</Text>
            </Card>
          ))}
        </CardList>
        <p className="ads-navigation">
          <Link to="/adverts">All ads</Link>
        </p>
      </section>
    </>
  )
}