import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import Main from './components/main';
import './App.css';

//https://rwe-server.herokuapp.com/

const httpLink = createHttpLink({
    uri: 'https://rwe-server.herokuapp.com',
    opts: {
      mode: 'no-cors',
    },
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
