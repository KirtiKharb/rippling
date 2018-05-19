import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Seat from './Seat.js'

export default class HallRow extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        id: this.props.row
      };
      this.updateCounter = this.updateCounter.bind(this);
    }

updateCounter(seatId, mode){
  return this.props.updateCounter(seatId, mode);
}

  render() {
    return(
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-2">
        <label className="row-index">{this.state.id}</label>
      </div>
      <div className="col-md-3">
          <Seat row={this.state.id} col="1" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="2" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="3" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="4" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="5" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
      </div>
      <div className="col-md-4 right-aisle">
          <Seat row={this.state.id} col="6" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="7" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="8" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="9" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="10" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="11" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
          <Seat row={this.state.id} col="12" allowSelection={this.props.allowSelection} asked={this.props.asked} updateCounter={this.updateCounter}/>
      </div>
      <div className="col-md-1"></div>
    </div>
    );
  }
}
