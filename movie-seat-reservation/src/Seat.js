import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default class Seat extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        mode: "empty"
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){

      if(!this.props.allowSelection) {return;}

      if(e.target.className==="reserved"){
        return;
      }

      if(this.state.mode==="empty"){
        var success  = this.props.updateCounter(e.target.id, this.state.mode);
        if(success){
          this.setState({mode: "selected"});
        }
      }else{
        this.setState({mode: "empty"});
        this.props.updateCounter(e.target.id, this.state.mode);
      }
    }

  render() {
    const seatId=this.props.row+this.props.col;
    const classes = "large-square "+this.state.mode;
    return(<div id={seatId} className={classes} onClick={this.handleClick}>
    </div>);
  }
}
