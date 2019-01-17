import React, { Component } from 'react';

class FamousPeopleTable extends Component {

  createOutputTable = () => {
    let tableOut = [];
    for( let i = 0; i < this.props.appPeopleToTable.length; i += 1) {
      let tableRow = (<tr><td>{this.props.appPeopleToTable[i].person}</td><td>{this.props.appPeopleToTable[i].role}</td></tr>);

      
      tableOut.push(tableRow);
    }
    return tableOut;
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Famous Role</th>
          </tr>
        </thead>
        <tbody>
          {this.createOutputTable()}
        </tbody>
      </table>
    );
  }
}

export default FamousPeopleTable;