import React, { useEffect, useState } from 'react'

import { getProducts } from '../../api/products/getProducts'
import { Layout } from '../../components/Layout'
import { ProductItem } from '../../components/ProductItem'

import { ListItem, List } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_PRODUCTS } from '../../store/products/actions'

export const ProductList = () => {
  const [isLoading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()

      setLoading(false)
      dispatch({ type: LOAD_PRODUCTS, payload: products })
    }

    fetchProducts()
  }, [])

  return (
    <Layout>
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
