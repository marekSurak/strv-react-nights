import styled from 'styled-components'
import { theme } from '../../common/theme'
import { Link } from 'react-router-dom'

export const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  width: 15.5rem;
  height: 15.5rem;
  text-decoration: none;
  border-radius: ${theme.radius.basic};
  box-shadow: ${theme.shadow.basic};
  transition: ${theme.transition.basic};

  &:hover {
    box-shadow: ${theme.shadow.hover};
  }
`

export const Img = styled.img`
  display: block;
  width: 7rem;
`

export const Title = styled.h3`
  color: ${theme.color.black};
  font-size: ${theme.fontSize.small};
`
