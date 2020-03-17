export const fetchData = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

// Kolla om vi använder den här
export const fetchDataWithHeaders = async (url, headerOptions) => {
  const response = await fetch(url, { headers: headerOptions })
  const json = await response.json()
  return json
}