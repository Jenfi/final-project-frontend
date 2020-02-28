import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdvertPage } from './pages/AdvertPage'
import { AdvertsListPage } from './pages/AdvertsListPage'
import { AdvertCreationPage } from './pages/AdvertCreationPage'
import { ProfilePage } from './pages/ProfilePage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
