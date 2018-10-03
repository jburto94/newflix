import React from 'react';
import tachyons from 'tachyons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between'>
        <div className='flex items-center'>
          <a href='netflix.com'>
            <img src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png' className='logo' alt='Netflix Logo' />
          </a>
          <span className='link white'>
            <a className='link white hover-gray' href='home.com'>Home</a>
          </span>
          <span>
            <a className='link white hover-gray' href='home.com'>Movies</a>
          </span>
          <span>
            <a className='link white hover-gray' href='home.com'>TV Shows</a>
          </span>
          <span>
            <a className='link white hover-gray' href='home.com'>Recently Added</a>
          </span>
        </div>
        <div className='flex items-center'>
          <input type='text' spellCheck='false' className='bg-black h2 white ph2' placeholder='Titles, people, genres...' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;