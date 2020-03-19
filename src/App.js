import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PrivateRoute } from './components/PrivateRoute'
import { AdvertCreationPage } from './pages/AdvertCreationPage'
import { AdvertPage } from './pages/AdvertPage'
import { AdvertsListPage } from './pages/AdvertsListPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegisterPage } from './pages/RegisterPage'
import { SignInPage } from './pages/SignInPage'

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false)

  const setLogInState = () => {
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setLogInState={setLogInState} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register"
            render={() => isLoggedIn ? <Redirect to="/profile" /> : <RegisterPage />} />
          <Route exact path="/sign-in"
            render={(props) => isLoggedIn ? <Redirect to="/profile" /> : <SignInPage {...props} setLogInState={setLogInState} />} />
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
