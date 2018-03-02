import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Stock from './components/Stocks';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // defining initial state
    this.state = {
      symbol: undefined,
      companyName: undefined,
      open: undefined,
      high: undefined,
      low: undefined
    }
  }
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
