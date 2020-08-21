import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Items, StyledCart, Item } from './styled'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../common/routes'
import useOutsideClick from '../../helpers/useOutsideClick'
import { DELETE_ITEM } from '../../store/cart/actions'

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const products = useSelector((state) => state.products)

  //detect click outside dropdown
  useOutsideClick(dropdownRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

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

  const handleDeleteitem = (id, e) => {
    e.preventDefault()
    dispatch({ type: DELETE_ITEM, payload: id })
  }

  const renderCartItems = () => cartItems.map((item) => renderItem(item))
  const renderItem = (item) => {
    const { product, count } = item
    return (
      <Item key={product.id}>
        <Link to={`${ROUTES.PRODUCT_LIST}/${product.id}`}>
          {product.attributes.name}
        </Link>
        <span>{count}</span>
        <button type="button" onClick={(e) => handleDeleteitem(product.id, e)}>
          x
        </button>
      </Item>
    )
  }

  return (
    <StyledCart>
      <button
        type="button"
        onClick={handleCartOpen}
      >{`Cart (${cartItemsCount})`}</button>
      {isOpen && !!cartItemsCount && (
        <Items ref={dropdownRef}>{renderCartItems()}</Items>
      )}
    </StyledCart>
  )
}
