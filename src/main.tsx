import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* é necessário envolver o <App/> com o  ApolloProvider que é um contest provider*/}
    {/* e como parametro "client" deve ser anexado a const que esta sendo utilizada para  */}
    {/* fazer a requisição a API na pasta apollo.ts */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
