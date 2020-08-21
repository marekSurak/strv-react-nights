import styled from 'styled-components'
import { theme } from '../../common/theme'

export const StyledCart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Items = styled.ul`
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 1rem;
  list-style-type: none;
  width: 25rem;
  box-shadow: ${theme.shadow.basic};
  border-radius: ${theme.radius.basic};
  background: ${theme.color.white};
`
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
  font-size: ${theme.fontSize.small};
`
