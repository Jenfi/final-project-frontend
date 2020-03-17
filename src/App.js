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
import { PrivateRoute } from './components/PrivateRoute'
import './styling/app.css'
import { CreatedAdMessage } from 'components/CreatedAdMessage'
import { CreatedUserMessage } from 'components/CreatedUserMessage'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/created-ad" component={CreatedAdMessage} />
          <Route exact path="/created-user" component={CreatedUserMessage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/adverts" component={AdvertsListPage} />
          <Route exact path="/adverts/:advertId" component={AdvertPage} />
          <PrivateRoute exact path="/create-ad" component={AdvertCreationPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
