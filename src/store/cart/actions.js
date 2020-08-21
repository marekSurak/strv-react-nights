export const ADD_ITEM = 'cart/addItem'
export const DELETE_ITEM = 'cart/deleteItem'

export const addItem = (itemData) => ({
  type: ADD_ITEM,
  payload: itemData,
})

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
})
