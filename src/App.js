import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdvertPage } from './pages/AdvertPage'
import { AdvertsListPage } from './pages/AdvertsListPage'
import { AdvertCreationPage } from './pages/AdvertCreationPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegisterPage } from './pages/RegisterPage'
import { SignInPage } from './pages/SignInPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NotFoundPage } from './pages/NotFoundPage'
import './styling/app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route exact path="/adverts">
            <AdvertsListPage />
          </Route>
          <Route exact path="/adverts/:advertId">
            <AdvertPage />
          </Route>
          <Route exact path="/create-ad">
            <AdvertCreationPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
