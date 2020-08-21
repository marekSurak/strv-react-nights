import React from 'react'
import { Cart } from '../Cart'
import * as S from './styled'

export const Header = () => {
  return (
    <S.Header>
      <S.H1>E-commerce</S.H1>
      <Cart />
    </S.Header>
  )
}
