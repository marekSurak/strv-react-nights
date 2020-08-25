import styled from 'styled-components'
import { theme } from '../../common/theme'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const H1 = styled.h1`
  font-size: ${theme.fontSize.xLarge};
  color: ${theme.color.primary};
  margin: 0;
`

export const List = styled.ul`
  list-style-type: none;
`

export const Item = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
`
