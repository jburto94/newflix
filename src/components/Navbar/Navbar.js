import React from 'react';
import tachyons from 'tachyons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div id='nav'>
      <nav>
        <div className='flex items-center'>
          <a href='netflix.com'>
            <img src='/images/logo.png' className='logo' alt='Netflix Logo' />
          </a>
          <div className='browse'>
            <div className='browse-btn'>
              <i className='fas fa-sort-down'></i>
              Browse
            </div>
            <div className='browse-list'>
              <span className='link white'>
                <a className='link white hover-gray' href='#nav'>Home</a>
              </span>
              <span>
                <a className='link white hover-gray' href='#movies'>Movies</a>
              </span>
              <span>
                <a className='link white hover-gray' href='#tv'>TV Shows</a>
              </span>
              <span>
                <a className='link white hover-gray' href='#trending'>Trending</a>
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center search-bar mr5'>
          <i className='fas fa-search white mr1'></i>
          <input type='text' spellCheck='false' className='bg-black h2 white ph2' placeholder='Titles, people, genres...' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;