import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { Event } from './pages/Event'
import { Router } from '../Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    // {/* é necessário envolver o <App/> com o  ApolloProvider que é um contest provider*/}
    // {/* e como parametro "client" deve ser anexado a const que esta sendo utilizada para  */}
    // {/* fazer a requisição a API na pasta apollo.ts */}
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
