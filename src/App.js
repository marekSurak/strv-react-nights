import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { store } from './store'
import { ROUTES } from './common/routes'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route
            path={['/', ROUTES.PRODUCT_LIST]}
            exact
            component={ProductList}
          />
          <Route path={ROUTES.PRODUCT_DETAIL} component={ProductDetail} />
        </Switch>
      </Router>
    </Provider>
  )
}
