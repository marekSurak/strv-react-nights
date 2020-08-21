import { LOAD_PRODUCTS } from './actions'

export const reducer = (state = [], actions) => {
  switch (actions.type) {
    case LOAD_PRODUCTS:
      return actions.payload
    default:
      return state
  }
}
