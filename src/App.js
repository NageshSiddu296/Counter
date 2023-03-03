import "./styles.css";
import React from "react";
export default function App() {
  const [count, setCount] = React.useState(0);

  function Add() {
    setCount(count + 1);
  }

  function Subtract() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }

  return (
    <div className="heading">
      <h1 className="heading-text">Counter</h1>
      <div className="App">
        <button className="sub" onClick={Subtract}>
          -
        </button>
        <div className="console">
          <h className="display">{count}</h>
          <div className="reset">
            <button className="reset-button" onClick={Reset}>
              Reset
            </button>
          </div>
        </div>
        <button className="add" onClick={Add}>
          +
        </button>
      </div>
    </div>
  );
}
