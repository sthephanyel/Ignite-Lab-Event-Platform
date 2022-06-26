//Nesse arquivo pe feito a requisição atraves da URL disponivel no Settings do site 
// app.graphcms.com/
//onde originalmente copiamos o projeto original disponibilizado pelo evento
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers:{
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`
    },
    cache: new InMemoryCache()
});