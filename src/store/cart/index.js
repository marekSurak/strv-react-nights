import { ADD_ITEM, DELETE_ITEM } from './actions'

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.id]: (state[action.payload.id] || 0) + 1,
      }

    case DELETE_ITEM:
      const nextState = Object.assign({}, state)
      delete nextState[action.payload]

      return nextState

    default:
      return state
  }
}
