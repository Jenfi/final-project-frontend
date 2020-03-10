import React, { useState, useEffect } from 'react'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'

//Här vill vi ha alla annonser listade, (eventuellt select katergori checkbox?)
// radio? samt en home/return-knapp 

export const AdvertsListPage = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/adverts').then((res) => res.json()).then((json) => { setAds(json) })
  }, [])

  return (
    <main>
      <h2 className="ad-listing-header">All adds</h2>
      <CardList className="ad-listing">
        {ads.map(ad => (
          <Card className="ad-card" key={ad._id}>
            <CardImage className="ad-image" src={ad.imageUrl} alt={ad.title} />
            <Heading level="3" className="ad-title">{ad.title}</Heading>
            <Text className="price-tag">{ad.price}</Text>
          </Card>
        ))}
      </CardList>
    </main >
  )
}