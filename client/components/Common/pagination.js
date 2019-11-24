import React, { useState } from 'react';
import Pagination from 'react-js-pagination';


const PaginationComponent = () => {
  const [totalItemsCount, setTotalItemsCount] = useState(10);

  const handlePageChange = (pages) => {
    setTotalItemsCount(totalItemsCount + 5);
  };

  return (
    <nav className="blog-pagination justify-content-center d-flex">
      <Pagination
        activePage
        hideDisabled
        hideFirstLastPages
        totalItemsCount={totalItemsCount}
        itemsCountPerPage={5}
        pageRangeDisplayed={5}
        itemClass='page-item'
        linkClass='page-link'
        onChange={handlePageChange}

      />
      {/* <ul className="pagination">
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Previous">
            <span aria-hidden="true">
              <span className="lnr lnr-chevron-left"></span>
            </span>
          </a>
        </li>
        <li className="page-item"><a href="#" className="page-link">01</a></li>
        <li className="page-item active"><a href="#" className="page-link">02</a></li>
        <li className="page-item"><a href="#" className="page-link">03</a></li>
        <li className="page-item"><a href="#" className="page-link">04</a></li>
        <li className="page-item"><a href="#" className="page-link">09</a></li>
        <li className="page-item">
          <a href="#" className="page-link" aria-label="Next">
            <span aria-hidden="true">
              <span className="lnr lnr-chevron-right"></span>
            </span>
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

export default PaginationComponent;