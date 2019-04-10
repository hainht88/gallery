import React, { Component } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import _ from "lodash";

class Gallery extends Component {
  state = {
    itemPerPage: 100,
    currentPage: 0
  };

  handlePageClick = page => {
    this.setState({ currentPage: page });
  };

  handleLoadMore = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    console.log("this.state.currentPage", this.state.currentPage);
  };

  render() {
    const { itemPerPage, currentPage } = this.state;
    const { data } = this.props;
    const pageNumber = _.range(0, Math.ceil(data.length / itemPerPage));
    const paginatedPages = _.chunk(data, itemPerPage);
    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-around">
          <InfiniteScroll
            pageStart={0}
            loadMore={this.handleLoadMore}
            hasMore={currentPage < pageNumber.length}
            loader={
              <div key={0} className="d-flex justify-content-center">
                <div className="spinner-border">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            }
          >
            {(paginatedPages[currentPage] &&
              paginatedPages[currentPage].map(img => (
                <Link
                  to={`/gallery/${img.id}`}
                  key={img.id}
                  className="text-white"
                >
                  <div className="card card-box">
                    <img
                      src={img.thumbnailUrl}
                      alt="{img.title}"
                      className="card-img"
                    />
                    <div className="card-overlay">
                      <p className="card-text">{img.id}</p>
                    </div>
                  </div>
                </Link>
              ))) ||
              []}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Gallery;
