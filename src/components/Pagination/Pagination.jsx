import React from 'react';
import '../../assets/css/components/pagination.css';

const Pagination = () => {
  return (
    <div className="db-pagination">
      <span className="db-pagination__text">Showing data 1 to 8 of 256K entries</span>
      <div className="db-pagination__controls">
          <button className="db-pagination__controls-button">{'<'}</button>
          <button className="db-pagination__controls-button">1</button>
          <button className="db-pagination__controls-button">2</button>
          <button className="db-pagination__controls-button">3</button>
          <button className="db-pagination__controls-button">4</button>
          <span>...</span>
          <button className="db-pagination__controls-button">40</button>
          <button className="db-pagination__controls-button">{'>'}</button>
      </div>
  </div>
  )
};

export default Pagination;
