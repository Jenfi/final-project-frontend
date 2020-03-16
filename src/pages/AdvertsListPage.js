import React, { useState, useEffect } from 'react'
import { fetchData } from '../services/api'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import { Spinner } from '../components/Spinner'

/* Här vill vi ha alla annonser listade, (eventuellt select katergori checkbox?)
radio? samt en home/return-knapp */

export const AdvertsListPage = () => {
  const [ads, setAds] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const ADS_URL = 'http://localhost:8080/adverts'

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
      <h2 className="ad-listing-header">All ads</h2>
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
    </>
  )
}