import React from "react";
import "./../App.css";

class Counter extends React.Component {
  render() {
    return (
      <div className="counter-container">
        <button type="button" onClick={this.props.increment}>
          +
        </button>
        <h2>{this.props.count}</h2>
        <button type="button" onClick={this.props.substract}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
