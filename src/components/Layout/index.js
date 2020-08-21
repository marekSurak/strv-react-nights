import React from 'react'
import { Wrapper, Content } from './styled'
import { Header } from '../Header'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}
