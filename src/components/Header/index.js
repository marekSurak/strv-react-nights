import React from 'react'
import { Cart } from '../Cart'
import * as S from './styled'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../common/routes'

export const Header = () => {
  return (
    <S.Header>
      <S.H1>E-commerce</S.H1>

      <div>
        <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        <Cart />
      </div>
    </S.Header>
  )
}
