import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import SeatMap from './SeatMap.js'

export default class ScreenMap extends React.Component {
  constructor(props){
    super(props);
    this.updateSeatCounter=this.updateSeatCounter.bind(this);
  }

 updateSeatCounter(seatId, mode){
   return this.props.updateSeatCounter(seatId, mode);
 }

  render() {
    return(
      <div>
      <br/>
      <div className="row">
        <div className="col-md-4"></div>
        <h5 className="center-text screen">screen</h5>
      </div>
      <br/>
      <SeatMap getReservedSeats={this.props.getReservedSeats} allowSelection={this.props.allowSelection} asked={this.props.asked} updateSeatCounter={this.updateSeatCounter}/>
    </div>
    );
  }
}
