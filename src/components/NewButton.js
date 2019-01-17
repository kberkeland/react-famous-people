import React, { Component } from 'react';

import FamousPerson from './FamousPerson.js';

class NewButton extends Component {

  showButtonPress = (event) => {
    let test = FamousPerson.person;

    console.log(test);

  }

  handleRoleInput = (event) => {

    this.setState({role: event.target.value});
  }

    render() {
        return (
            <div>
          
                <button onClick={this.showButtonPress}>Press Me</button>
            </div>
        );
    }
}

export default NewButton;