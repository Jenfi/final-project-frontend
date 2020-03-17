export const isAuthenticatedUser = () => {
  if (localStorage.getItem('accessToken')) {
    return true
  } else {
    return false
  }
}