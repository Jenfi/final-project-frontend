import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../services/api'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import { Hero } from '../components/Hero'
import { Spinner } from '../components/Spinner'
import '../styling/hero.css'
import '../styling/adListing.css'


export const HomePage = () => {
  const [ads, setAds] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const ADS_URL = process.env.REACT_APP_API_ADVERTS

  useEffect(() => {
    setIsLoading(true)
    fetchData(ADS_URL)
      .then((adsData) => {
        setAds(adsData)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Hero />
      <section className="recent-ads">
        <h2 className="ad-listing-header">Recently added</h2>

        <CardList className="ad-listing">
          {ads.map((ad) => (
            <Card className="ad-card" key={ad._id}>
              {isLoading ? <Spinner /> : <CardImage className="ad-image" src={ad.imageUrl} alt={ad.title} />}
              <Heading level="3" className="ad-title">
                <CardLink to={`/adverts/${ad._id}`}>{ad.title}</CardLink>
              </Heading>
              <Text className="price-tag">{ad.price} SEK</Text>
            </Card>
          ))}
        </CardList>
        <p className="ads-navigation">
          <Link to="/adverts">All ads <i className="icon-arrow arrow-right" aria-hidden="true"></i></Link>
        </p>
      </section>
    </>
  )
}