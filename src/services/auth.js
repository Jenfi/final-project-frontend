export const isAuthenticatedUser = () => {
  if (localStorage.getItem('accessToken')) {
    return true
  } else {
    return false
  }
}

export const signInUser = async (body) => {
  const AUTH_URL = 'http://localhost:8080/sessions'
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(AUTH_URL, options)
  const json = await response.json()
  return json
}

export const registerUser = async (body) => {
  const REGISTER_URL = 'http://localhost:8080/users'
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }
  const response = await fetch(REGISTER_URL, options)
  const json = await response.json()
  return json
}