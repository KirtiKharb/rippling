import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';

export default class SelectedSeatsInfoTable extends React.Component{

  render(){
    return(<div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-8">
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='name'>
           Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='count'>
            No. of Seats
          </TableHeaderColumn>
          <TableHeaderColumn dataField='seats'>
            Seats
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
      <div className="col-md-3">
        <ColorCode />
    </div>
  </div>);
 }
}

function ColorCode(){
  return (
    <div>
        <div className="row"><div className="selected"> </div> <label>Selected Seat</label></div>
        <div className="row"><div className="reserved"> </div> <label>Reserved Seat</label></div>
        <div className="row"><div className="empty"> </div> <label>Empty Seat</label></div>
    </div>
    );
}
