//Nesse arquivo pe feito a requisição atraves da URL disponivel no Settings do site 
// app.graphcms.com/
//onde originalmente copiamos o projeto original disponibilizado pelo evento
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ouk97e14cd01z46vqo8prn/master',
    cache: new InMemoryCache()
});