import React, { Component } from 'react';
import './App.css';

class Stopclock extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      enteredSeconds: 0,
      interval: 0
    })
    console.log('props', this.props);
  }

  // componentWillMount(){
  //   this.setTimer(this.props.initialTime);
  // }

  componentDidMount(){
    this.setState({enteredSeconds: this.props.initialTime});
    let interval = setInterval(() => this.setTimer(this.state.enteredSeconds), 1000);
    this.setState({interval: interval});
  }

  setTimer(inputTime){
    // this.setState({enteredSeconds: inputTim  });
    if(inputTime === 0){
      this.setState({enteredSeconds: "Time's Up!"});
      clearInterval(this.state.interval);
    } else {
      this.setState({enteredSeconds: inputTime - 1});
    }
  }

  render() {
    console.log('render called');
    console.log('initialTime', this.props.initialTime);
    console.log('enteredSeconds', this.state.enteredSeconds);
    return(
    <div className="Stopwatch-title">
      {this.state.enteredSeconds}
    </div>
    )
  }
}

export default Stopclock;
