import React, { Component } from 'react';

import MovieCard from './components/MovieCards/MovieCard';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const movie = 'https://api.themoviedb.org/3/movie/',
      tv = 'https://api.themoviedb.org/3/tv/',
      end = '?api_key=c6244e63e9a2f5382dba2aa72fd0fe7f&language=en-US&page=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMovies: `${movie}popular${end}2`,
      currentMovies: `${movie}now_playing${end}`,
      upcomingMovies: `${movie}upcoming${end}`,
      topMovies: `${movie}top_rated${end}`,
      popularTv: `${tv}popular${end}`,
      currentTv: `${tv}airing_today${end}`,
      topTv: `${tv}top_rated${end}`
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <MovieCard category={this.state.popularMovies} title='Popular Movies' />
        <MovieCard category={this.state.upcomingMovies} title='Upcoming Movies' />
        <MovieCard category={this.state.topMovies} title='Top Rated Movies' />
        <MovieCard category={this.state.currentMovies} title='Now Playing' />
        <MovieCard category={this.state.popularTv} title='Popular TV Shows' />
        <MovieCard category={this.state.currentTv} title='TV Airing Today' />
        <MovieCard category={this.state.topTv} title='Top Rated Shows' />
      </div>
    );
  }
}

export default App;
