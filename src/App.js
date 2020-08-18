import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={['/', '/products']} exact component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </Router>
  )
}
