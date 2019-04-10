import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="gallery" className="navbar-brand">
            React Gallery
          </Link>
        </div>
      </nav>
    );
  }
}

export default NavBar;
