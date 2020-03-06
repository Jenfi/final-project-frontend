import React, { useState, useEffect } from 'react'

//Här vill vi ha alla annonser listade, (eventuellt select katergori checkbox?)
// radio? samt en home/return-knapp 

export const AdvertsListPage = () => {
  const [ads, setAds] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/adverts').then((res) => res.json()).then((json) => { setAds(json) })
  }, [])

  return (
    <main>
      <section className="ad-listing">
        <h2 className="ad-listing-header">All adds</h2>
        {ads.map(ad => (
          <article className="ad-card" key={ad._id}>
            <img className="ad-image" src={ad.imageUrl} alt={ad.title} />
            <h3>{ad.title}</h3>
            <p className="price-tag">{ad.price}</p>
          </article>
        ))}
      </section>
    </main >
  )
}