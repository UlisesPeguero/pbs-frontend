import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

function getPageItem(value, onClick, active) {
  return (
    <li className={`page-item${active ? ' active' : ''}`} >
      <button className="page-link" onClick={onClick}>{value}</button>
    </li>
  );
}


export default function GridPaginator({
  pagesShown,
  totalRows,
  rowsPerPage,
  currentPage,
  onClick,
  ...rest
}) {

  const handleClickGoto = () => true;

  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const leftSidePages = Math.ceil(pagesShown / 2) - 1;
  const rightSidePages = Math.floor(pagesShown / 2);
  let pages = [getPageItem(1, () => onClick(1), currentPage === 1)];
  let startShownPage = currentPage - leftSidePages;
  let endShownPage = currentPage + rightSidePages;
  if (startShownPage < 1) {
    startShownPage = 1;
    endShownPage = pagesShown;
  }
  if (endShownPage > totalPages) endShownPage = totalPages;
  if (startShownPage > 2) {
    pages.push(getPageItem("...", handleClickGoto));
  }
  console.log({ startShownPage, endShownPage, totalPages, currentPage });
  for (let i = startShownPage; i <= endShownPage; i++) {
    pages.push(getPageItem(i, () => onClick(i), currentPage === i));
  }
  return (
    <nav aria-label="Page navigation example" className='ms-auto'>
      <ul className="pagination mb-0">
        <li className="page-item"><button className="page-link"><ArrowLeft /></button></li>
        {
          pages
        }
        <li className="page-item"><button className="page-link"><ArrowRight /></button></li>
      </ul>
    </nav>
  );
}
