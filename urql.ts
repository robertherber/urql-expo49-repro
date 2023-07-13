// import { requestPolicyExchange } from '@urql/exchange-request-policy'
import {
  createClient, fetchExchange,
} from 'urql'

const createClientWithToken = ({
  token, 
}) => createClient({
  url: `https://example.com/graphql`,
  requestPolicy: 'cache-and-network',
  fetchOptions: () => ({
    headers: { Authorization: token ? `Bearer ${token}` : '' },
  }),
  exchanges: [
    fetchExchange,
  ],
})

export default createClientWithToken
