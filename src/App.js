import React, { Component } from 'react';
import 'tachyons';

import CardDisplay from './components/MovieCards/CardDisplay';
import SearchResult from './components/MovieCards/SearchResult';
import Navbar from './components/Navbar/Navbar';
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
          <Navbar onChange={this.onChange} />
          <CardDisplay />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Navbar onChange={this.onChange} />
          <SearchResult data={this.state.searchValue} />
        </div>
      );
    }
  }
}

export default App;
