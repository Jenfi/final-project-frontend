import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdvertPage } from './pages/AdvertPage'
import { AdvertsListPage } from './pages/AdvertsListPage'
import { AdvertCreationPage } from './pages/AdvertCreationPage'
import { ProfilePage } from './pages/ProfilePage'
import { SignInForm } from './components/sign-in/SignInForm'
import { RegisterForm } from './components/register/RegisterForm'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './styling/app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SignInForm />
      <RegisterForm />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/adverts">
          <AdvertsListPage />
        </Route>
        <Route exact path="/adverts/advertId">
          <AdvertPage />
        </Route>
        <Route exact path="/adverts/create">
          <AdvertCreationPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
