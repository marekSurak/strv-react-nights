import { createStore, combineReducers } from 'redux'
import { reducer as cart } from './cart'
import { reducer as products } from './products'

const rootReducer = combineReducers({
  cart,
  products,
})

export const store = createStore(rootReducer)
