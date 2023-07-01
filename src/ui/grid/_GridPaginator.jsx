import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

export default function GridPaginator() {
  return (
    <nav aria-label="Page navigation example" className='ms-auto'>
      <ul className="pagination mb-0">
        <li className="page-item"><button className="page-link"><ArrowLeft /></button></li>
        <li className="page-item"><button className="page-link">1</button></li>
        <li className="page-item"><button className="page-link">2</button></li>
        <li className="page-item"><button className="page-link">3</button></li>
        <li className="page-item"><button className="page-link"><ArrowRight /></button></li>
      </ul>
    </nav>
  );
}
