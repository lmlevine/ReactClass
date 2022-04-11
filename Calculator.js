import React from "react";
import "./styles.css";

export default class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: "",
      number2: "",
      result: "",
      errorMsg: ""
    };
    this.onFirstInputChange = this.onFirstInputChange.bind(this);
    this.onSecondInputChange = this.onSecondInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
  }

  onFirstInputChange(event) {
    const value = event.target.value;
    this.setState({
      number1: value
    });
  }

  onSecondInputChange(event) {
    const value = event.target.value;
    this.setState({
      number2: value
    });
  }

  handleAdd(event) {
    event.preventDefault();
    const number1 = parseInt(this.state.number1, 10);
    const number2 = parseInt(this.state.number2, 10);

    const sum = number1 + number2;
    if (isNaN(sum)) {
      this.setState({
        errorMsg: "Please enter valid numbers."
      });
    } else {
      this.setState({
        errorMsg: "",
        result: sum
      });
    }
  }

  handleSubtract(event) {
    event.preventDefault();
    const number1 = parseInt(this.state.number1, 10);
    const number2 = parseInt(this.state.number2, 10);

    const subtraction = number1 - number2;
    if (isNaN(subtraction)) {
      this.setState({
        errorMsg: "Please enter valid numbers."
      });
    } else {
      this.setState({
        errorMsg: "",
        result: subtraction
      });
    }
  }

  render() {
    return (
      <div>
        <div className="input-section">
          {this.state.errorMsg && (
            <p className="error-msg">{this.state.errorMsg}</p>
          )}
          <label>First Number</label>
          <input
            type="text"
            name="number1"
            placeholder="Enter a number"
            value={this.state.number1}
            onChange={this.onFirstInputChange}
          />
        </div>
        <div className="input-section">
          <label>Second Number</label>
          <input
            type="text"
            name="number2"
            placeholder="Enter a number"
            value={this.state.number2}
            onChange={this.onSecondInputChange}
          />
        </div>
        <div className="result-section">
          Result: <span className="result">{this.state.result}</span>
        </div>
        <button type="button" className="btn" onClick={this.handleAdd}>
          Add
        </button>
        <button type="button" className="btn" onClick={this.handleSubtract}>
          Subtract
        </button>
      </div>
    );
  }
}
