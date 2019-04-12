import React, { Component } from "react";
import _ from "lodash";
import Photos from "./Photos";
import http from "../Services/HttpService";
import Pagination from "./common/pagination";
import config from "../config.json";

class Gallery extends Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: true, itemPerPage: 60, currentPage: 0 };
  }

  async componentDidMount() {
    const { data } = await http.get(config.BASE_API_URL);
    this.setState({ data, isLoading: false });
  }

  render() {
    const { data, itemPerPage, currentPage, isLoading } = this.state;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemPerPage);
    const paginatedPage = _.chunk(data, itemPerPage);

    return (
      <div className="container">
        <Pagination
          currentPage={currentPage}
          itemPerPage={itemPerPage}
          totalItems={totalItems}
          totalPages={totalPages}
          onClick={this.handleCurrentPageChange}
        />
        <Photos isLoading={isLoading} page={paginatedPage[currentPage]} />
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
