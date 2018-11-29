import React, { Component } from 'react';
import axios from 'axios';
import CardBox from './CardBox';
import './MovieCard.css';

class MovieCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards: []
		}
	}

	componentDidMount() {
		axios.get(this.props.category)
			.then(res => {
				this.setState({ cards: res.data.results });
			})
			.catch(err => console.log(err));
	}

  render() {
    return (
			<div>
				<h2 
					className='white'
					id={this.props.id}
				>
					{this.props.title}
				</h2>

				<div className='popular-moves'>
					{this.state.cards.map((movie, i) => {
						let bgSrc = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
						return <CardBox bgSrc={bgSrc} movie={movie} i={i} />
					})}
				</div>
			</div>
    )
  }
}

export default MovieCard;