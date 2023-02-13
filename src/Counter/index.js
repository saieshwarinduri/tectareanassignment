import { Component } from "react";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import "./index.css";
import NavBr from "../Navbar/Header";

class Counter extends Component {
  state = { number: 0 };

  onIncrement = () => {
    this.setState((prev) => ({
      number: prev.number + 3,
    }));
  };

  onDecrement = () => {
    this.setState((prev) => ({
      number: prev.number - 3,
    }));
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <NavBr />
        <div className="maincontaner">
          <h1>Counter</h1>
          <div className="conunterContainer">
            <button className="buttons" onClick={this.onIncrement}>
              <BiPlus className="icon" />
            </button>
            <h1 className="counternumber">{number}</h1>
            <button className="buttons" onClick={this.onDecrement}>
              <AiOutlineMinus className="icon" />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
