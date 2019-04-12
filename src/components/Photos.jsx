import React, { Fragment } from "react";
import CardBox from "./common/CardBox";
import Loading from "./common/Loading";

const Photos = props => {
  const { isLoading, page } = props;

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap justify-content-around">
          {page && page.map(img => <CardBox key={img.id} img={img} />)}
        </div>
      )}
    </Fragment>
  );
};

export default Photos;
