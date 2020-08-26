import React from 'react'
import { Layout } from '../../components/Layout'
import { ROUTES } from '../../common/routes'
import { DELETE_ITEM } from '../../store/cart/actions'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styled'
import { useGetCartCount } from '../../helpers/useGetCartCount'

export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const products = useSelector((state) => state.products)

  const handleDeleteitem = (id, e) => {
    e.preventDefault()

    const modal = window.confirm('Do you want to delete item from cart?')

    if (modal) dispatch({ type: DELETE_ITEM, payload: id })
  }

  const cartItemsCount = useGetCartCount()

  const cartItems = Object.keys(cart).map((itemId) => {
    return {
      product: products.find((product) => product.id === itemId),
      count: cart[itemId],
    }
  })

  const renderCartItems = () => cartItems.map((item) => renderItem(item))

  const renderItem = (item) => {
    const { product, count } = item

    return (
      <S.Item key={product.id}>
        <S.Name to={`${ROUTES.PRODUCT_LIST}/${product.id}`}>
          {product.attributes.name}
        </S.Name>
        <S.Count>{count}</S.Count>
        <button
          title="Delete item"
          type="button"
          onClick={(e) => handleDeleteitem(product.id, e)}
        >
          x
        </button>
      </S.Item>
    )
  }

  return (
    <Layout>
      <h2>Cart</h2>

      {!!cartItemsCount && <S.List>{renderCartItems()}</S.List>}
      {!cartItemsCount && <span>No items is cart.</span>}
    </Layout>
  )
}
