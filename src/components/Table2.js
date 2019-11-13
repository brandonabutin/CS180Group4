import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';

import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import '../Table.css';

function rowClassNameFormat(row, rowIdx) {
  // row is whole row object
  // rowIdx is index of row
  console.log(row)
  return row['id'] === 'Etherium' ?
    'GeorgeMichael-Row' : 'Other-Row';
}

class Table1 extends Component {
  render() {
    return (

      <div>
        <BootstrapTable data={this.props.data} trClassName={rowClassNameFormat}>
          <TableHeaderColumn isKey dataField='author'>
            Author:
          </TableHeaderColumn>
          <TableHeaderColumn dataField='title' >
            Title:
          </TableHeaderColumn>
          <TableHeaderColumn dataField='description'>
            Description:
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;
