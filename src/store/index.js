import { createStore, combineReducers } from 'redux'
import { reducer as cart } from './cart'
import { reducer as products } from './products'

const rootReducer = combineReducers({
  cart,
  products,
})

export const store = createStore(
  rootReducer,

  // this variable will be set if you have redux-dev-tools extension installed in your browser
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
