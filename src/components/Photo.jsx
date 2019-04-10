import React, { Component } from "react";

class Photo extends Component {
  goBack = () => {
    this.props.history.push("/gallery");
  };

  render() {
    return (
      <button onClick={() => this.goBack()} className="btn btn-primary">
        Back
      </button>
    );
  }
}

export default Photo;
