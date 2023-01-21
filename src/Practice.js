import { Component, ReactNode } from "react";
import "./App.css";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   // Add number function
  //   incr = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  handleClick = (val) => {
    this.setState({ count: val });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  //   decr = () => {
  //     this.setState({ count: this.state.count - 1 });
  //   };

  render() {
    return (
      <div className="general">
        <p>{this.state.count}</p>
        <button
          className="success"
          onClick={() => this.handleClick(this.state.count + 1)}
        >
          +
        </button>

        <button className="secondary" onClick={this.reset}>
          Reset
        </button>

        <button
          className="danger"
          onClick={() => this.handleClick(this.state.count - 1)}
        >
          -
        </button>
      </div>
    );
  }
}

export default Practice;
