import React, { Component } from "react";

class Photo extends Component {
  goBack = () => {
    this.props.history.push("/gallery");
  };

  render() {
    const { img } = this.props.location.state;

    return (
      <div className="container clearfix">
        <img
          src={img.webformatURL}
          alt={img.tags}
          className="img-fluid photo float-left "
        />
        <div className="photo-info float-left">
          <ul className="photo-info-list">
            <li>
              <i className="fa fa-user-circle-o" />
              &nbsp;
              {img.user}
            </li>
            <li>
              <i className="fa fa-heart" />
              &nbsp;
              {img.favorites}
            </li>
            <li>
              <i className="fa fa-thumbs-o-up" />
              &nbsp;
              {img.likes}
            </li>
            <li>
              <i className="fa fa-eye" />
              &nbsp;
              {img.views}
            </li>
            <li>
              <i className="fa fa-comment-o" />
              &nbsp;
              {img.comments}
            </li>
            <li>
              <i className="fa fa-tag" />
              &nbsp;
              {img.tags.toUpperCase()}
            </li>
          </ul>

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
