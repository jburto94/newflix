import React, { Component } from 'react';
import 'tachyons';

import CardDisplay from './components/MovieCards/CardDisplay';
import SearchResult from './components/MovieCards/SearchResult';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Navbar/Search';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }
  }

  onChange = e => {
    const {value} = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    if (this.state.searchValue === '') {
      return (
        <div className="App">
          <Navbar browseClick={this.browseClick} >
            <Search onChange={this.onChange} />
          </Navbar>
          <CardDisplay />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Navbar browseClick={this.browseClick} >
            <Search onChange={this.onChange} />
          </Navbar>
          <SearchResult data={this.state.searchValue} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
