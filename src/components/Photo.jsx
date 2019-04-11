import React, { Component } from "react";

class Photo extends Component {
  goBack = () => {
    this.props.history.push("/gallery");
  };

  render() {
    const { img } = this.props.location.state;
    console.log(img);

    return (
      <div className="container clearfix">
        <img
          src={img.url}
          alt={img.title}
          className="img-fluid photo float-left "
        />
        <div className="photo-info float-left">
          <p>{img.title.toUpperCase()}</p>
          <button
            onClick={() => this.goBack()}
            className="btn btn-primary float-right"
          >
            <i className="fa fa-undo" />
            &nbsp;Back
          </button>
        </div>
      </div>
    );
  }
}

export default Photo;
