import { useSelector } from 'react-redux'

export const useGetCartCount = () => {
  const cart = useSelector((state) => state.cart)

  const cartItemsCount = Object.values(cart).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  return cartItemsCount
}
