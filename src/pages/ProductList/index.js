import React, { useEffect, useState } from 'react'
import { getProducts } from '../../api/products/getProducts'
import { Layout } from '../../components/Layout'
import { H1, ListItem, List } from './styled'
import { ProductItem } from '../../components/ProductItem'

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
    <Layout>
      <H1>Product list</H1>
      {isLoading ? (
        '...'
      ) : (
        <List>
          {products.map((product) => (
            <ListItem key={product.id}>
              <ProductItem data={product} />
            </ListItem>
          ))}
        </List>
      )}
    </Layout>
  )
}
