import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
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
import { CreatedAdMessage } from 'components/CreatedAdMessage'
import { CreatedUserMessage } from 'components/CreatedUserMessage'

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('accessToken') ? true : false)

  const setLogInState = () => {
    if (localStorage.getItem('accessToken')) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }

  console.log(isLoggedIn)
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setLogInState={setLogInState} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register"
            render={(props) => isLoggedIn ? <Redirect to="/profile" /> : <RegisterPage />} />
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
