export const ADD_ITEM = 'cart/addItem'

export const addItem = (itemData) => ({
  type: ADD_ITEM,
  payload: itemData,
})
