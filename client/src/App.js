import React, { Component } from 'react';
import Header from '../src/components/header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';
import { Provider } from 'react-redux';
import './App.css';



class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <div className="App">
            <Main />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
