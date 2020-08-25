import styled from 'styled-components'
import { theme } from '../../common/theme'

export const FormLine = styled.div`
  margin: 1rem 0;
`

export const Label = styled.label`
  display: block;
  margin: 0.25rem 0;
  font-size: ${theme.fontSize.small};
`

export const Input = styled.input`
  border: 2px solid
    ${({ hasError }) => (hasError ? theme.color.red : theme.color.gray)};
  border-radius: ${theme.radius.basic};
  font-size: ${theme.fontSize.normal};
  font-weight: 100;
  padding: 0.5rem;
  width: 30rem;
`

export const Error = styled.span`
  display: block;
  color: ${theme.color.red};
  margin-top: 0.5rem;
`
