import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { store } from './store'
import { ROUTES } from './common/routes'
import { SignUp } from './pages/SignUp'
import { Cart } from './pages/Cart'

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
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.CART} component={Cart} />
        </Switch>
      </Router>
    </Provider>
  )
}
