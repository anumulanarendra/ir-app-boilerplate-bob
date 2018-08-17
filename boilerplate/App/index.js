import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from 'apollo-link-context'

import './index.css'
import PrimaryLayout from './Layouts/PrimaryLayout'
import registerServiceWorker from './registerServiceWorker'
import { AUTH_TOKEN } from './Utils/Constants'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <PrimaryLayout />
    </ApolloProvider>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
