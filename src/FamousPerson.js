import React, { Component } from 'react';

class FamousPerson extends Component {
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
      <div>
        <p>Person = {this.state.person}</p>
        <input onChange={this.handlePersonInput}></input>
        <p>Role = {this.state.role}</p>
        <input onChange={this.handleRoleInput}></input>
      </div>
    );
  }
}

export default FamousPerson;