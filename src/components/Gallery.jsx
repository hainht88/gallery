import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import placeHolder from "../resources/images/place-holder.png";

class Gallery extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          {data &&
            data.map(img => (
              <Link
                to={`/gallery/${img.id}`}
                key={img.id}
                className="text-white"
              >
                <div className="card card-box">
                  <LazyImage
                    placeHolder={placeHolder}
                    src={img.thumbnailUrl}
                    width={`100%`}
                    height={`auto`}
                    effect={"opacity"}
                    alt={img.title}
                  />
                  <div className="card-overlay">
                    <p className="card-text">{img.id}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
