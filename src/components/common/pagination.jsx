import React from "react";

const Pagination = props => {
  const { currentPage, itemPerPage, totalItems, totalPages } = props;
  let from = currentPage * itemPerPage + 1;
  let to = (currentPage + 1) * itemPerPage;
  const total = totalItems || "...";

  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => props.onClick(-currentPage)}
          >
            <i className="fa fa-angle-double-left" />
            &nbsp;First
          </button>
        </li>
        <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => props.onClick(-1)}>
            <i className="fa fa-angle-left" />
            &nbsp;Back
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">{`${from} - ${
            to >= totalItems ? totalItems : to
          } of ${total}`}</button>
        </li>
        <li
          className={`page-item ${
            currentPage + 1 >= totalPages ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={() => props.onClick(1)}>
            Next&nbsp;
            <i className="fa fa fa-angle-right" />
          </button>
        </li>
        <li
          className={`page-item ${
            currentPage + 1 >= totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => props.onClick(totalPages - currentPage - 1)}
          >
            Last&nbsp;
            <i className="fa fa fa-angle-right" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
