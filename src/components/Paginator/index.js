import React from 'react';
import ReactPaginate from 'react-paginate';
import './index.css';

export const Paginator = ({ pageCount, handlePageClick }) => {
  const onClick = (event) => {
    event.selected += 1;
    handlePageClick(event);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={0}
      className="pagination"
      activeClassName="active"
      pageClassName="numbers"
      previousClassName="labels"
      nextClassName="labels"
    />
  );
};
