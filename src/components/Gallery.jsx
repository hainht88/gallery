import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import placeHolder from "../resources/images/place-holder.png";

const LazyImageWrapper = props => (
  <LazyImage
    placeHolder={placeHolder}
    src={props.src}
    width={`100%`}
    height={`auto`}
    effect={"opacity"}
    alt={props.alt}
  />
);

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
                  <LazyImageWrapper
                    src={img.thumbnailUrl}
                    alt={img.title}
                    className="card-img"
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
