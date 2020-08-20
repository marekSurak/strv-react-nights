import styled from 'styled-components'
import { theme } from '../../../common/theme'

export const PrimaryButton = styled.button`
  border-radius: ${theme.radius.button};
  border: none;
  padding: 0.5rem;
  background-color: ${theme.color.primary};
  color: ${theme.color.black};
  cursor: pointer;
`
