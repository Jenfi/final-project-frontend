import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdvertPage } from './pages/AdvertPage'
import { AdvertsListPage } from './pages/AdvertsListPage'
import { AdvertCreationPage } from './pages/AdvertCreationPage'
import { ProfilePage } from './pages/ProfilePage'
import { Registration } from './pages/Registration'
import { SignIn } from './pages/SignIn'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import './styling/app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
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
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
