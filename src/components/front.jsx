// Front.jsx

import React, { Component } from "react";
import "./front.css";


class Front extends Component {
  render() {
    return (
      <div className="Front">
        <h1>Hello, This is React</h1>
        <p>Like clicking the right link</p>
        <ul>
          <li>Number 1</li>
          <li>Number 2</li>
          <li>Number 3</li>
          <li>Number 4</li>
          <li>Number 5</li>
        </ul>
      </div>
    );
  }
}

export default Front;
