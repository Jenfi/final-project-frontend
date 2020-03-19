import React, { useState, useEffect } from 'react'
import { fetchData, fetchDataWithHeaders } from '../services/api'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import '../styling/profilepage.css'
import userlogo from '../assets/images/userlogo.png'
import { Spinner } from 'components/Spinner'
import { EmptyState } from 'components/EmptyState'

// här vill vi visa kontaktinfo samt aktiva annonser (kunna ändra annons?)
// Hälsa på den inoggades namn 
// Stretch: om vi vill lägga till favoriter vill vi kunna se dem här 

export const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const profileUrl = `http://localhost:8080/users/current`
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
          <div className="user-profile-wrapper">
            <div className="image-container">
              <img className="userlogo" src={userlogo} alt="User Logo" />
            </div>
            <section className="profile-box">
              <h2 className="user-name">{`Hi ${userProfile.name}!`}</h2>
              <p className="user-email">{userProfile.email}</p>
            </section>
          </div>
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