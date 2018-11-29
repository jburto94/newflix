import React, { Component } from 'react';
import axios from 'axios';
import CardBox from './CardBox';
import './SearchResults.css';

class SearchResult extends Component {
	constructor(props) {
		super();
		this.state = {
			searchResults: []
		}
	}

	componentDidMount() {
		this.search(this.props.data);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.data !== nextProps.data) {
			this.search(nextProps.data);
		}
	}

	search = value => {
		let searchQuery = `https://api.themoviedb.org/3/search/multi?api_key=c6244e63e9a2f5382dba2aa72fd0fe7f&language=en-US&query=${value}`
		axios.get(searchQuery)
			.then(res => {
				this.setState({ searchResults: res.data.results });
			})
			.catch(err => console.log(err));
	}

  render() {
		const {searchResults} = this.state;

		if(searchResults.length > 0) {
			console.log(searchResults);
			return (
				<div>
					<h2 className='white'>Search results for: "{this.props.data}"</h2>
					<div>
						<h2 
							className='white'
							id={searchResults.id}
						>
							{searchResults.title}
						</h2>
	
						<div className='popular-moves' id='search-results'>
							{searchResults.map((movie, i) => {
								let bgSrc = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
								return <CardBox bgSrc={bgSrc} movie={movie} key={i} />
							})}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<h1 className='white tc mt5'>Sorry, your search yielded no results...</h1>
			);
		}
    
  }
}

export default SearchResult;