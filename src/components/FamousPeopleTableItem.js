import React, { Component } from 'react';

class FamousPeopleTableItem extends Component {

  render() {
    return (
      <tr>
        <td>
            {this.props.person}
        </td>
        <td>
            {this.props.role}
        </td>
      </tr>
    );
  }
}

export default FamousPeopleTableItem;