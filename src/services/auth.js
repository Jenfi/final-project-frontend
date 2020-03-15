export const isAuthenticatedUser = () => {
  if (localStorage.getItem('accessToken')) {
    return true
  } else {
    return false
  }
}

export const signOutUser = () => {
  localStorage.removeItem('accessToken')
}

export const authenticateUser = (userLogin) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userLogin)
  }

  fetch('http://localhost:8080/sessions', requestOptions)
    .then((res) => res.json())
    .then((json) => {
      if (json.accessToken) {
        window.localStorage.setItem('accessToken', json.accessToken)
        return ({ loggedIn: true, accessToken: json.accessToken })
      } else {
        return ({ loggedIn: false, message: json.message })
      }
    }).catch((err) => {
      console.log(err)
    })
}

