import styled from 'styled-components'
import { theme } from '../../common/theme'

export const H1 = styled.h1`
  color: ${theme.color.black};
`

export const ListItem = styled.li`
  list-style-type: none;
  margin: 1rem;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
`
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`
