import React, {Component} from 'react';
import classnames from 'classnames';
import './Navbar.css';
import BrowseItem from './BrowseItem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  displayBrowseList = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    let classes = classnames('browse-list', {active: this.state.active});

    return (
      <div id='nav'>
        <nav>
          <div className='flex items-center'>
            <a href='netflix.com'>
              <img src='./images/logo.png' className='logo' alt='Netflix Logo' />
            </a>
            <div className='browse'>
              <div className='browse-btn' onClick={this.displayBrowseList}>
                <i className='fas fa-sort-down'></i>
                Browse
              </div>
              <div className={classes}>
                <BrowseItem link='#' displayBrowseList={this.displayBrowseList} text='Home' />
                <BrowseItem link='#movies' displayBrowseList={this.displayBrowseList} text='Movies' />
                <BrowseItem link='#tv' displayBrowseList={this.displayBrowseList} text='TV Shows' />
                <BrowseItem link='#trending' displayBrowseList={this.displayBrowseList} text='Trending' />
              </div>
            </div>
          </div>
          {this.props.children}
        </nav>
      </div>
    );
  }
}

export default Navbar;