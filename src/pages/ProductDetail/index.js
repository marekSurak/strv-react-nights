import React, { useEffect, useState } from 'react'
import { getProduct } from '../../api/products/getProduct'

export const ProductDetail = (props) => {
  const [product, setProduct] = useState({})
  const [isLoading, setLoading] = useState(true)
  const { match } = props
  console.log(props)

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct({ id: match.params.id })

      setProduct(product)
      setLoading(false)
    }

    fetchProduct()
  }, [match.params.id])

  return (
    <>
      <h1>Product detail</h1>
      {isLoading ? (
        '...'
      ) : (
        <div>
          <h2>{product.attributes.name}</h2>
          <h3>{product.attributes.code}</h3>
          <span>{product.attributes.description}</span>
          <img
            src={product.attributes.image_url}
            alt={product.attributes.name}
            style={{ height: '200px' }}
          />
        </div>
      )}
    </>
  )
}
