import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/adverts" component={AdvertsListPage} />
        <Route exact path="/adverts/:advertId" component={AdvertPage} />
        <PrivateRoute exact path="/create-ad" component={AdvertCreationPage} />
        <PrivateRoute exact path="/profile" component={ProfilePage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
