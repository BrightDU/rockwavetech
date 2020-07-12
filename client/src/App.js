import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import './App.css';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache()
})

class App extends Component {
  render() {
    return (
  
      <BrowserRouter>
          <ApolloProvider client={client}>
          <div className="App">
              <Main />
          </div>
          </ApolloProvider>
      </BrowserRouter>
    
    );
  }
}

export default App;
