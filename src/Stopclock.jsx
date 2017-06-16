import React, { Component } from 'react';
import './App.css';

class Stopclock extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      enteredSeconds: 2
    })
  }

  componentWillMount() {
    console.log('1. WillMount called');
    this.startTimer(this.props.initialTime)
  }

  componentDidMount() {
    console.log('5. DidMount called');
    setInterval(() => this.startTimer(this.state.enteredSeconds), 1000);
    console.log('setInterval......................');
  }

setTimer(initialTime) {
    console.log('setTimer called');
    this.setState({enteredSeconds: this.props.initialTime});
    console.log('enteredSeconds set to initialTime');
}

startTimer(enteredSeconds) {
  if(this.state.enteredSeconds !== 0){
    this.setState({
      enteredSeconds: this.state.enteredSeconds - 1
    })
    console.log('startTimer called');
  }
}

  render() {
    console.log('2. render called');
    console.log('3. initialTime', this.props.initialTime);
    console.log('4. enteredSeconds', this.state.enteredSeconds);

    return(
    <div className="Stopwatch-title">
      {this.state.enteredSeconds}
    </div>
    )
  }
}

export default Stopclock;
