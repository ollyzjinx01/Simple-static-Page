import React, { Component } from "react";
import "./front.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="logo">
              <img src="" alt="logo" />
            </div>
            <div>
              <ul className="Menu">
                <li>Pricing</li>
                <li>Shopping</li>
                <li>Contact</li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
