import React from 'react'
import * as S from './styled'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../common/routes'
import { useGetCartCount } from '../../helpers/useGetCartCount'

export const Header = () => {
  const cartItemsCount = useGetCartCount()

  return (
    <S.Header>
      <S.H1>E-commerce</S.H1>

      <nav>
        <S.List>
          <S.Item>
            <Link to={ROUTES.PRODUCT_LIST}>Home</Link>
          </S.Item>
          <S.Item>
            <Link to={ROUTES.CART}>{`Cart (${cartItemsCount})`}</Link>
          </S.Item>
          <S.Item>
            <Link to={ROUTES.SIGN_UP}>Sign up</Link>
          </S.Item>
        </S.List>
      </nav>
    </S.Header>
  )
}
