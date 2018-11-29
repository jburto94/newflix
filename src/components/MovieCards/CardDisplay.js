import React, { Component } from 'react';
import MovieCard from './MovieCard';

const movie = 'https://api.themoviedb.org/3/movie/',
      tv = 'https://api.themoviedb.org/3/tv/',
      trending = 'https://api.themoviedb.org/3/trending/all/day',
      end = '?api_key=c6244e63e9a2f5382dba2aa72fd0fe7f',
      page = '&language=en-US&page=';

class CardDisplay extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popularMovies: `${movie}popular${end}${page}2`,
      currentMovies: `${movie}now_playing${end}${page}`,
      upcomingMovies: `${movie}upcoming${end}${page}`,
      topMovies: `${movie}top_rated${end}${page}`,
      popularTv: `${tv}popular${end}${page}`,
      currentTv: `${tv}airing_today${end}${page}`,
      topTv: `${tv}top_rated${end}${page}`,
      trending: `${trending}${end}`
		};
	}

  render() {
    return (
      <div className='mb5'>
        <MovieCard category={this.state.popularMovies} title='Popular Movies' id='movies' />
        <MovieCard category={this.state.upcomingMovies} title='Upcoming Movies' />
        <MovieCard category={this.state.topMovies} title='Top Rated Movies' />
        <MovieCard category={this.state.currentMovies} title='Now Playing' />
        <MovieCard category={this.state.popularTv} title='Popular TV Shows' id='tv' />
        <MovieCard category={this.state.currentTv} title='TV Airing Today' />
        <MovieCard category={this.state.topTv} title='Top Rated Shows' />
        <MovieCard category={this.state.trending} title='Trending Now' id='trending' />
      </div>
    )
  }
}

export default CardDisplay;