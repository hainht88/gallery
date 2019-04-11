import React, { Component } from "react";
import _ from "lodash";
import http from "../Services/HttpService";
import Loading from "./common/Loading";
import CardBox from "./common/CardBox";
import config from "../config.json";
import Pagination from "./common/pagination";

class Gallery extends Component {
  state = { data: [], isLoading: true, itemPerPage: 60, currentPage: 0 };

  async componentDidMount() {
    const { data } = await http.get(config.BASE_API_URL);
    this.setState({ data, isLoading: false });
  }

  render() {
    const { data, itemPerPage, currentPage } = this.state;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemPerPage);
    const paginatedPage = _.chunk(data, itemPerPage);

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="d-flex flex-wrap justify-content-around">
            {paginatedPage[currentPage] &&
              paginatedPage[currentPage].map(img => (
                <CardBox key={img.id} img={img} />
              ))}
          </div>
        )}
        <hr />
        <Pagination
          currentPage={currentPage}
          itemPerPage={itemPerPage}
          totalItems={totalItems}
          totalPages={totalPages}
          onClick={this.handleCurrentPageChange}
        />
      </div>
    );
  }

  handleCurrentPageChange = offset => {
    this.setState({ currentPage: this.state.currentPage + offset });
  };
}

export default Gallery;
