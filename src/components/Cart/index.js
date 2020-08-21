import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Items, StyledCart, Item } from './styled'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../common/routes'

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)

  const cart = useSelector((state) => state.cart)
  const products = useSelector((state) => state.products)

  const cartItemsCount = Object.values(cart).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  const cartItems = Object.keys(cart).map((itemId) => {
    return {
      product: products.find((product) => product.id === itemId),
      count: cart[itemId],
    }
  })

  const handleCartOpen = () => setIsOpen(!isOpen)

  const renderCartItems = () => cartItems.map((item) => renderItem(item))
  const renderItem = (item) => {
    const { product, count } = item
    return (
      <Item key={product.id}>
        <Link to={`${ROUTES.PRODUCT_LIST}/${product.id}`}>
          {product.attributes.name}
        </Link>
        <span>{count}</span>
      </Item>
    )
  }

  return (
    <StyledCart>
      <button
        type="button"
        onClick={handleCartOpen}
      >{`Cart (${cartItemsCount})`}</button>
      {isOpen && <Items>{renderCartItems()}</Items>}
    </StyledCart>
  )
}
