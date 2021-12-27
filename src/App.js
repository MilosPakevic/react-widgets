import SearchWidget from './Components/SearchWidget'
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './DataStore/Client';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SearchWidget placeholder={'Type search terms...'} />
      </div>
    </ApolloProvider>
  );
}

export default App;
