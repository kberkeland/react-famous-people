import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = { person: 'Franklin Roosevelt',
                   role: 'President'
                 }
  }

  handlePersonInput = (event) => {

    this.setState({person: event.target.value});

  }

  handleRoleInput = (event) => {

    this.setState({role: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Famous People</h1>
        </header>
        <p>Person = {this.state.person}</p>
        <input onChange={this.handlePersonInput}></input>
        <p>Role = {this.state.role}</p>
        <input onChange={this.handleRoleInput}></input>
      </div>
    );
  }
}

export default App;
