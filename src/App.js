import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import test from './components/test';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div><List/></div>
        <div><test/></div>
      </div>
    );
  }
}

export default App;
