import React, { useEffect, useState } from 'react'
import { getProduct } from '../../api/products/getProduct'
import { Layout } from '../../components/Layout'
import { Link } from 'react-router-dom'
import { Content, Image, TextWrap, Code } from './styled'
import { PrimaryButton } from '../../components/Button/Primary'
import { ROUTES } from '../../common/routes'
import { useDispatch } from 'react-redux'
import { ADD_ITEM } from '../../store/cart/actions'

export const ProductDetail = (props) => {
  const [product, setProduct] = useState({})
  const [isLoading, setLoading] = useState(true)
  const { match } = props

  const dispatch = useDispatch()

  const handleAddItem = (id, e) => {
    e.preventDefault()

    dispatch({ type: ADD_ITEM, payload: product })
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct({ id: match.params.id })

      setProduct(product)
      setLoading(false)
    }

    fetchProduct()
  }, [match.params.id])

  return (
    <Layout>
      {isLoading ? (
        '...'
      ) : (
        <>
          <Link to={ROUTES.PRODUCT_LIST}>Back to list</Link>
          <Content>
            <h2>{product.attributes.name}</h2>
            <Code>{product.attributes.code}</Code>
            <Image
              src={product.attributes.image_url}
              alt={product.attributes.name}
            />
            <TextWrap>{product.attributes.description}</TextWrap>
            <PrimaryButton
              type="button"
              onClick={(e) => handleAddItem(product.id, e)}
            >
              Add to chart
            </PrimaryButton>
          </Content>
        </>
      )}
    </Layout>
  )
}
