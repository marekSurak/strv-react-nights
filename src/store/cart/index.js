import { ADD_ITEM } from './actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.id]: (state[action.payload.id] || 0) + 1,
      }

    default:
      return state
  }
}
