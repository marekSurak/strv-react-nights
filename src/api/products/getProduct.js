import config from '../../config'
import { getToken } from '../token/getToken'
import { fetchApi } from '../fetch'

export const getProduct = async ({ id }) => {
  const { access_token: accesToken } = await getToken()

  return fetchApi(`${config.API_URL}/api/skus/${id}`, {
    headers: {
      Authorization: `Bearer ${accesToken}`,
    },
  })
}
