import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path={['/', '/products']} exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </Provider>
  )
}
