import styled from 'styled-components/macro'
import { theme } from '../../../common/theme'

export const SecondaryButton = styled.button`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.purple};
  color: ${theme.color.softGray};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
`
