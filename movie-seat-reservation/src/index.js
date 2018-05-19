import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ScreenMap from './ScreenMap.js'
import SelectedSeatsInfoTable from './SelectedSeatsInfoTable.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      seats: 0,
      history:[],
      selected: new Set(),
      allowSelection: false,
      remaining: 120,
      selectCount:0,
    };
    this.handleSeatSelection = this.handleSeatSelection.bind(this)
    this.updateName = this.updateName.bind(this);
    this.updateSeats = this.updateSeats.bind(this);
    this.updateSeatCounter = this.updateSeatCounter.bind(this);
    this.handleSeatConfirmation = this.handleSeatConfirmation.bind(this);
    this.validateName = this.validateName.bind(this);
  }

 updateSeatCounter(seatId, mode){
   if(mode === "empty"){
     if(this.state.seats != 0 && this.state.seats == this.state.selectCount  ){
       alert("You can't select more seats than asked for!");
       return 0;
     }
   }

    var occupied = this.state.selected;
    var count = this.state.selectCount;
    if(mode==="empty"){
      occupied.add(seatId);
      count++;
    }
    if(mode==="selected"){
      occupied.delete(seatId);
      count--;
    }
    this.setState({selectCount: count, selected: occupied});
    return 1;
 }

  updateName(e) {
    this.setState({name: e.target.value});
  }

  updateSeats(e) {
    this.setState({seats: e.target.value});
  }

validateName(){
  var name = this.state.name.trim();
  if(name === ""){
    alert("Please enter name");
    return 0;
  }

  var isAlpha = /^[A-Za-z\s]+$/.test(name);
  if(!isAlpha){
    alert("Name must contain only letters and spaces");
    return 0;
  }
  return 1;
}

  handleSeatSelection() {
    if(!this.validateName()){
      return;
    }
    if(this.state.seats == 0){
      alert("Please enter no. of seats");
      return;
    }

    var isNum = /^\d+$/.test(this.state.seats);
    if(!isNum){
      alert("Number of seats must contain only positive numbers");
      return;
    }

    if(this.state.seats > this.state.remaining){
      alert("Please enter fewer no. of seats. Remaining seats are" + this.state.remaining);
      return;
    }
    this.setState({allowSelection: true});
  }

  handleSeatConfirmation() {
    if(!this.validateName()){
      return;
    }
    if(this.state.seats==0){
      alert("Number of seats can't be Zero.");
      return;
    }
    if(this.state.seats>this.state.selectCount){
      alert("Selected fewer seats than asked for. Please select more or ask less.");
      return;
    }
    var reserved="";
    var occupied = this.state.selected;
    var remaining = this.state.remaining;
    const it = occupied.values();
    for(let seat of it){
      var element = document.getElementById(seat);
      element.className = 'large-square reserved';
      remaining -= 1;
      if(reserved===""){
        reserved +=  seat;
      } else {
        reserved+=", " + seat;
      }
      occupied.delete(seat);
    }

    this.setState(
      {history: this.state.history.concat([
            {name: this.state.name, count: this.state.selectCount, seats: reserved}
          ])}
    );

   this.setState({name:"", seats:0, allowSelection: false, remaining: remaining, selected: occupied, selectCount: 0});
  }

  render() {
    return (
      <div>
        <div><h1 className="center-text">Movie seat reservation</h1></div>
        <br/>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <label>Name: </label>
            <input type="text" value={this.state.name} className="blank" onChange={this.updateName}/>
          </div>
          <div className="col-md-5">
            <label>Number of seats: </label>
            <input type="text" value={this.state.seats} onChange={this.updateSeats}/>
          </div>
        </div>
        <div className="row center-text">
          <button className="btn btn-default" onClick={this.handleSeatSelection}>start selecting</button>
        </div>
        <br/>
        <div id="seat-map">
          {
            <div>
            <ScreenMap allowSelection={this.state.allowSelection} asked={this.state.seats} updateSeatCounter={this.updateSeatCounter}/>
            <br/>
           <div className="row center-text">
             <button className="btn btn-default " onClick={this.handleSeatConfirmation}>confirm selection</button>
           </div>
            <br/>
            <SelectedSeatsInfoTable data={this.state.history}/>
            </div>
          }
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
