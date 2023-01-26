import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledPaginateContainer } from './style';

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

export const Paginator = ({ pageCount, handlePageClick }) => {
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </StyledPaginateContainer>
  );
};
