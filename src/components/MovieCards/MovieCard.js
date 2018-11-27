import React, { Component } from 'react';
import axios from 'axios';
import './MovieCard.css';

class MovieCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popularMovies: []
		}
	}

	componentDidMount() {
		axios.get(this.props.category)
			.then(res => {
				this.setState({ popularMovies: res.data.results });
			})
			.catch(err => console.log(err));
	}

  render() {
    return (
			<div>
				<h2 className='white'>{this.props.title}</h2>

				<div className='popular-moves'>
					{this.state.popularMovies.map((movie, i) => {
						let bgSrc = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

						return (
							<div 
								className='card-box' key={i}
								style={
									{ background: `url(${bgSrc}) 50% 10%`}
								}
							>
								<div 
									className='card-content'
								>
									<h2 className='white'>
										{
											movie.title ?
											movie.title :
											movie.name
										}
									</h2>
									<span className='white f4'>
										<i className='far fa-star mr1'></i>
										{movie.vote_average}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
    )
  }
}

export default MovieCard;