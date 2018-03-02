import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Stock from './components/Stocks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
        <Stock />
      </div>
    );
  }
}

export default App;
