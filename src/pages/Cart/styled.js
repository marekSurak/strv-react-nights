import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 50%;
`

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`

export const Count = styled.span`
  flex-basis: 50%;
`

export const Name = styled(Link)`
  flex-basis: 50%;
`
