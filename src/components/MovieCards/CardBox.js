import React from 'react';

const CardBox = (props) => {
	const {bgSrc, movie} = props;
	let background = '';
	let bgY = '';
	if (bgSrc !== 'https://image.tmdb.org/t/p/w300/null' && bgSrc !== 'https://image.tmdb.org/t/p/w300/undefined') {
		background = bgSrc;
		bgY = '10%'
	} else {
		background = './images/unavailable.jpg';
		bgY = '50%';
	}
	return (
		<div className='card-box'
			style={{ background: `url(${background}) 50% ${bgY}`}}
		>
			<div className='card-content'>
				<h2 className='white'>
					{ movie.title ? movie.title : movie.name }
				</h2>
				<span className='white f4'>
					<i className='far fa-star mr1'></i>
					{movie.vote_average}
				</span>
			</div>
		</div>
	);
}

export default CardBox;