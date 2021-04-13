import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const {
    goToNextPage,
    goToPreviousPage,
    currentPage,
    totalPages,
    changePage,
  } = props;
  const getPageNumbers = () => {
    let startPage, endPage;
    if (totalPages <= 4) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 4;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 3;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 1;
      }
    }
    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );
    return pages;
  };
  return (
    <div className='col-md-6 pagination-div'>
      <button
        onClick={goToPreviousPage}
        className={`prev ${
          currentPage === 1 || totalPages === 0 ? "disabled" : ""
        }`}
      >
        <i class='fas fa-backward'></i>
      </button>
      {getPageNumbers().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${
            currentPage === item ? "active" : "disabled"
          }`}
        >
          <span>{item}</span>
        </button>
      ))}
      <button
        onClick={goToNextPage}
        className={`next ${
          currentPage === totalPages || totalPages === 0 ? "disabled" : ""
        }`}
      >
        <i class='fas fa-forward'></i>
      </button>
    </div>
  );
}

export default Pagination;
