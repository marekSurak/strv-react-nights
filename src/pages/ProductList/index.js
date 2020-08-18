import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/products/getProducts'
import { Link } from 'react-router-dom'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()

      setProducts(products)
      setLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1>Product list</h1>
      {isLoading ? (
        '...'
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <h3>{product.attributes.name}</h3>
                <img
                  src={product.attributes.image_url}
                  alt={product.attributes.name}
                  style={{ height: '50px' }}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
