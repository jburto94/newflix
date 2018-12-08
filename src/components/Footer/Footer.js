import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div id='footer'>
      <div className='flex items-center justify-center w-100 h4'>
        <span className='silver flex f6 items-center'>
          <img src='./images/themoviedb.png' alt='TheMovieDB' className='footer-img' />
          This product uses the TMDb API but is not endorsed or certified by TMDb.
        </span>
      </div>
    </div>
  );
}

export default Footer;