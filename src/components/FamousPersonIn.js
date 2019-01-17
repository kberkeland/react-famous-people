import React, { Component } from 'react';

class FamousPersonIn extends Component {
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

  sendPersonToApp = () => {
    const famousPerson = { person: this.state.person,
                     role: this.state.role
                   };
    this.props.getPerson(famousPerson);
  }

  render() {
    return (
      <div>
        <p>Person = {this.state.person}</p>
        <input onChange={this.handlePersonInput}></input>
        <p>Role = {this.state.role}</p>
        <input onChange={this.handleRoleInput}></input>
        <button onClick={this.sendPersonToApp}>Press Me</button>
      </div>
    );
  }
}

export default FamousPersonIn;