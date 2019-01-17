import React, { Component } from 'react';

import Header from './components/Header.js';
import FamousPersonIn from './components/FamousPersonIn.js';
import FamousPeopleTable from './components/FamousPeopleTable.js';
import './App.css';

class App extends Component {

  constructor () {
    super();
    this.state = {
      famousPersonArray: [],
    };
  }

  getPersonFromFamousPerson = (famousPersonToAdd) => {
    this.setState({
      famousPersonArray: [...this.state.famousPersonArray, famousPersonToAdd],
    }, () => {this.logFields()});
  }

  logFields = () => {
    console.log(`App state person: ${this.state.famousPersonArray}`);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {JSON.stringify(this.state.famousPersonArray)}
        <FamousPersonIn getPerson={this.getPersonFromFamousPerson} />
        <FamousPeopleTable appPeopleToTable={this.state.famousPersonArray} />

      </div>
    );
  }
}

export default App;
