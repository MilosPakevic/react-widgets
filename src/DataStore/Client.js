import {ApolloClient, HttpLink, InMemoryCache, from} from '@apollo/client'
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors, netwokError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            console.log(`Error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ 
        uri: "https://dir-euromoney1000-dev-api.ase-si-group-ext.p.azurewebsites.net/graphql"
    })
])

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})