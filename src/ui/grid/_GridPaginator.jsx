import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

function getPageButtons(totalPages) {

}

export default function GridPaginator({
  pagesShown,
  totalRows,
  rowsPerPage,
  currentPage,
  onClick,
  ...rest
}) {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <nav aria-label="Page navigation example" className='ms-auto'>
      <ul className="pagination mb-0">
        <li className="page-item"><button className="page-link"><ArrowLeft /></button></li>
        <li className="page-item"><button className="page-link">1</button></li>
        {
          totalPages > pagesShown + 2 &&
          <li className="page-item"><button className="page-link">...</button></li>
        }
        {

        }
        {
          totalPages > pagesShown + 2 &&
          <li className="page-item"><button className="page-link">...</button></li>
        }
        <li className="page-item"><button className="page-link">{totalPages}</button></li>
        <li className="page-item"><button className="page-link"><ArrowRight /></button></li>
      </ul>
    </nav>
  );
}
