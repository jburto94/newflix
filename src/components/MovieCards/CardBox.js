import React from 'react';

const CardBox = props => {
  return (
    <div 
			className='card-box' key={props.i}
			style={
					{ background: `url(${props.bgSrc}) 50% 10%`}
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