import React, { Component } from 'react';
import './App.css';

class Stopclock extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      enteredSeconds: 0
    })
  }

  startTimer(initialTime){
    this.setState({
      enteredSeconds: this.props.initialTime
    })
    console.log('enteredSeconds', this.state.enteredSeconds);
  }


  render() {
    console.log('2. render called');
    console.log('3. initialTime', this.props.initialTime);
    console.log('4. enteredSeconds', this.state.enteredSeconds);
    this.startTimer.bind(this);
    return(
    <div className="Stopwatch-title">
      {this.state.enteredSeconds}
    </div>
    )
  }
}

export default Stopclock;
