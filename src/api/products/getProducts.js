import config from '../../config'
import { getToken } from '../token/getToken'
import { fetchApi } from '../fetch'

export const getProducts = async () => {
  const { access_token: accesToken } = await getToken()

  return fetchApi(`${config.API_URL}/api/skus`, {
    headers: {
      Authorization: `Bearer ${accesToken}`,
    },
  })
}
