import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HallRow from './HallRow.js'

export default class SeatMap extends React.Component {
  constructor(props){
    super(props);
    this.updateSeatCounter = this.updateSeatCounter.bind(this);
  }

updateSeatCounter(seatId, mode){
  return this.props.updateSeatCounter(seatId, mode);
}

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-3">
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
          </div>
          <div className="col-md-4 right-aisle">
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">10</div>
            <div className="num">11</div>
            <div className="num">12</div>
          </div>
          <div className="col-md-1"></div>
        </div>
      <HallRow row="A" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="B" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked} />
      <HallRow row="C" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="D" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="E" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <br/>
      <br/>
      <HallRow row="F" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="G" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="H" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="I" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
      <HallRow row="J" updateCounter={this.updateSeatCounter} allowSelection={this.props.allowSelection} asked={this.props.asked}/>
    </div>
    );
  }
}
