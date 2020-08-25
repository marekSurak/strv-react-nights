import React from 'react'
import * as S from './styled'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../common/routes'

export const Header = () => {
  return (
    <S.Header>
      <S.H1>E-commerce</S.H1>

      <nav>
        <S.List>
          <S.Item>
            <Link to={ROUTES.PRODUCT_LIST}>Home</Link>
          </S.Item>
          <S.Item>
            <Link to={ROUTES.CART}>Cart</Link>
          </S.Item>
          <S.Item>
            <Link to={ROUTES.SIGN_UP}>Sign up</Link>
          </S.Item>
        </S.List>
      </nav>
    </S.Header>
  )
}
