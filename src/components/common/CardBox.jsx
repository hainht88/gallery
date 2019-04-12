import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";
import placeHolder from "../../resources/images/place-holder.png";

const CardBox = props => {
  const { img } = props;
  const destination = { pathname: `/gallery/${img.id}`, state: { img } };

  return (
    <Link to={destination} className="text-white">
      <div className="card card-box img-thumbnail">
        <LazyImage
          placeHolder={placeHolder}
          src={img.previewURL}
          width={"100%"}
          height={200}
          effect={"opacity"}
          alt={img.tags}
        />
        <div className="card-overlay">
          <p className="card-text">{img.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardBox;
