export const LOAD_PRODUCTS = 'products/load'

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products,
})
