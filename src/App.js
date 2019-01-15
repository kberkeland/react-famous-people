import React, { Component } from 'react';

import Header from './Header.js';
import FamousPerson from './FamousPerson.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
