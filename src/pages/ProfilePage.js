import React from 'react'
import '../styling/profilepage.css'
import userlogo from '../assets/images/userlogo.png'

// här vill vi visa kontaktinfo samt aktiva annonser (kunna ändra annons?)
// Hälsa på den inoggades namn 
// Stretch: om vi vill lägga till favoriter vill vi kunna se dem här 

export const ProfilePage = () => {
  return (
    <main className="userprofile">
      <img className="userlogo" src={userlogo} alt="User Logo" />
      <section className="profile-box">
        <h2>Hi (name)!</h2>
        <p>Username</p>
        <p> example@example.com </p>
      </section>
    </main>
  )
}