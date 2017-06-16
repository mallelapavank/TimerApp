import React, {Component} from 'react';
import Clock from './Clock';
import Stopclock from './Stopclock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2017",
      newDeadline: "",
      initialTime: "11",
      inputTime: "0"
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  countdownTimer() {
    this.setState({
      initialTime: this.state.inputTime
    });
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            onChange = {event => this.setState({newDeadline: event.target.value})}
            placeholder="input date"
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
<br /><hr />
        <div className="App-title">
          Countdown Timer in Seconds
        </div>
        <Stopclock
          initialTime = {this.state.initialTime}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            onChange = {event => this.setState({inputTime: event.target.value})}
            placeholder = "input time"
          />
          <Button onClick={() => this.countdownTimer()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
