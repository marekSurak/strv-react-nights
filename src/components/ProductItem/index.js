import React from 'react'
import { Item, Img, Title } from './styled'
import { PrimaryButton } from '../Button/Primary'
import { ADD_ITEM } from '../../store/cart/actions'

import { useDispatch } from 'react-redux'
import { ROUTES } from '../../common/routes'

export const ProductItem = ({ data }) => {
  const { name, image_url } = data.attributes
  const dispatch = useDispatch()

  const alert = () => {}

  const handleAddItem = (id, e) => {
    e.preventDefault()

    const modal = window.confirm('Do you want to add item to cart?')

    if (modal) dispatch({ type: ADD_ITEM, payload: data })
  }

  return (
    <Item to={`${ROUTES.PRODUCT_LIST}/${data.id}`}>
      <Title>{name}</Title>
      <Img src={image_url} alt={name} />
      <PrimaryButton type="button" onClick={(e) => handleAddItem(data.id, e)}>
        Add to chart
      </PrimaryButton>
    </Item>
  )
}
