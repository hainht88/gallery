import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../Services/HttpService";
import Loading from "./common/Loading";
import LazyImage from "./LazyImage";
import placeHolder from "../resources/images/place-holder.png";
import config from "../config.json";

class Gallery extends Component {
  state = { data: [], isLoading: true };

  async componentDidMount() {
    const { data } = await http.get(config.BASE_API_URL);
    this.setState({ data, isLoading: false });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loading />
        ) : (
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
                      alt={`image-${img.id}`}
                    />
                    <div className="card-overlay">
                      <p className="card-text">{img.id}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;
