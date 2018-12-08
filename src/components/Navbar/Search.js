import React from 'react';
import './Search.css';

const Search = props => {
  return (
    <div className='flex items-center search-bar mr5'>
      <i className='fas fa-search white mr2'></i>
      <input 
        type='text' 
        spellCheck='false' 
        className='bg-black h2 white ph2' 
        placeholder='Titles, people, genres...' 
        onChange={props.onChange}
      />
    </div>
  );
}

export default Search;