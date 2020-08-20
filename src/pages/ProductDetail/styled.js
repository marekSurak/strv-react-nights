import styled from 'styled-components'
import { theme } from '../../common/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: ${theme.shadow.basic};
`

export const Image = styled.img`
  width: 300px;
`

export const TextWrap = styled.div`
  margin: 1rem;
  text-align: center;
  width: 50%;
`

export const Code = styled.span`
  color: ${theme.color.gray};
`
