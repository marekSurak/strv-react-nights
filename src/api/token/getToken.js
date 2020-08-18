import config from '../../config'

export const getToken = () => {
  return fetch(`${config.API_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: config.CLIENT_ID,
      scope: config.API_SCOPE,
    }),
  }).then((res) => res.json())
}
