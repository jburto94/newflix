import React from 'react';

const CardBox = props => {
	let background = '';
	let bgY = '';
	if (props.bgSrc !== 'https://image.tmdb.org/t/p/w300/null' && props.bgSrc !== 'https://image.tmdb.org/t/p/w300/undefined') {
		background = props.bgSrc;
		bgY = '10%'
	} else {
		background = '/images/unavailable.jpg';
		bgY = '50%';
	}
  return (
    <div 
			className='card-box'
			style={
					{ background: `url(${background}) 50% ${bgY}`}
			}
    >
			<div 
				className='card-content'
			>
				<h2 className='white'>
					{
						props.movie.title ?
						props.movie.title :
						props.movie.name
					}
				</h2>
				<span className='white f4'>
					<i className='far fa-star mr1'></i>
					{props.movie.vote_average}
				</span>
			</div>
    </div>
  );
}

export default CardBox;