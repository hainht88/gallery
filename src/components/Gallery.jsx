import React, { Component } from "react";
import { Link } from "react-router-dom";

import LazyLoad from "react-lazyload";

class Gallery extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          {data &&
            data.map(img => (
              <LazyLoad key={img.id} height={250} once>
                <Link to={`/gallery/${img.id}`} className="text-white">
                  <div className="card card-box">
                    <img
                      src={img.thumbnailUrl}
                      alt="{img.title}"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <p className="card-text">{img.title}</p>
                    </div>
                  </div>
                </Link>
              </LazyLoad>
            ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
