import React, { Component } from "react";
import { Link } from "react-router-dom";
import http from "../Services/HttpService";
import Loading from "./common/Loading";
import LazyImage from "./LazyImage";
import placeHolder from "../resources/images/place-holder.png";
import config from "../config.json";

class Gallery extends Component {
  state = { data: [], isLoading: true };

  componentDidMount() {
    const { hits: data } = http
      .get(config.BASE_API_URL)
      .then(response => {
        if (response.status === 200) {
          this.setState({ isLoading: false });
          this.setState({ data });
          console.log("data", data);
          console.log("reponse", response);
        }
      })
      .catch(error => console.log("error", error));
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
                      alt={img.title}
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
