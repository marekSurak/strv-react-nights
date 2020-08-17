import React, { useEffect, useState } from 'react'
import config from './config'

const getToken = () => {
  return fetch(`${config.API_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.CLIENT_ID,
      scope: config.API_SCOPE,
    }),
  }).then((res) => res.json())
}

const getSkus = (access_token) => {
  return fetch(`${config.API_URL}/api/skus`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json())
}

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      const { access_token } = await getToken()
      const products = await getSkus(access_token)

      setProducts(products.data)
      setLoading(false)
    }

    getProducts()
  })

  return (
    <>
      <h1> STRV react nights </h1>
      {isLoading ? (
        '...'
      ) : (
        <ul>
          {products.map((product) => (
            <li>{product.attributes.name}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
