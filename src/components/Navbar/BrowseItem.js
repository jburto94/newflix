import React from 'react';
import './BrowseItem.css';

const BrowseItem = props => {
  return (
    <span className='link white'>
      <a className='link white hover-gray' href={props.link} onClick={props.displayBrowseList}>{props.text}</a>
    </span>
  );
}

export default BrowseItem;