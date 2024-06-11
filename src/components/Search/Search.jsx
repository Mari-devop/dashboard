import React from 'react';
import sprite from '../../assets/css/svg/sprite.svg';
import '../../assets/css/components/search.css';

const Search = () => {
  return (
    <div className="db-search">
      <div className="db-search__input-container">
        <input 
            type="text" 
            placeholder="Search" 
            className="db-search__input" 
        />
        <svg className="db-search_input-icon">
            <use href={`${sprite}#search 1`}></use>
        </svg>
      </div>
    </div>
  )
};

export default Search;
