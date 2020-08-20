import React from 'react'
import { Item, Img, Title } from './styled'
import { PrimaryButton } from '../Button/Primary'

export const ProductItem = ({ data }) => {
  const { name, image_url } = data.attributes

  const handleAddToChart = (e) => e.preventDefault()

  return (
    <Item to={`/products/${data.id}`}>
      <Title>{name}</Title>
      <Img src={image_url} alt={name} />
      <PrimaryButton type="button" onClick={handleAddToChart}>
        Add to chart
      </PrimaryButton>
    </Item>
  )
}
