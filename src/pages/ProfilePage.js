import React, { useState, useEffect } from 'react'
import { fetchData, fetchDataWithHeaders } from '../services/api'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import { CardOptions } from '../components/card/CardOptions'
import '../styling/profilepage.css'
import userlogo from '../assets/images/userlogo.png'
import { Spinner } from 'components/Spinner'
import { EmptyState } from 'components/EmptyState'

export const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const profileUrl = process.env.REACT_APP_API_CURRENT_USER
    const headerOptions = { 'Authorization': accessToken }

    fetchDataWithHeaders(profileUrl, headerOptions)
      .then((profileData) => {
        setUserProfile(profileData)
        setIsLoading(false)
        console.log(profileData)
      })
  }, [accessToken])

  return (
    <>
      {userProfile && (
        <>
          <section className="profile-box">
            <div className="profile-image-wrapper">
              <img className="profile-image" src={userlogo} alt="User Logo" />
            </div>
            <h2 className="profile-greeting">{`Hi ${userProfile.name}!`}</h2>
            <p className="profile-email">{userProfile.email}</p>
          </section>
          <section className="my-ads">
            {userProfile.adverts.length === 0 && (
              <EmptyState
                title="You don't have any ads yet"
                text="Why don't you create one!"
                linkText="Create an ad"
                url="/create-ad" />
            )}
            {userProfile.adverts.length > 0 && (
              <>
                <h2 className="ad-listing-header">My ads ({userProfile.adverts.length})</h2>
                <CardList className="ad-listing">
                  {userProfile.adverts.map((ad) => (
                    <Card className="ad-card" key={ad._id}>
                      {isLoading
                        ? <Spinner />
                        : <CardImage
                          className="ad-image"
                          src={ad.imageUrl}
                          alt={ad.title} />}
                      <Heading level="3" className="ad-title">
                        <CardLink to={`/adverts/${ad._id}`}>{ad.title}</CardLink>
                      </Heading>
                      <Text className="price-tag">{ad.price} SEK</Text>
                      <CardOptions adId={ad._id} sold={ad.sold} />
                    </Card>
                  ))}
                </CardList>
              </>
            )}
          </section>
        </>
      )}
    </>
  )
}