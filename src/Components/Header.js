import React, { Component } from 'react';
import Search from './Search';

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h1 className='page-title'>Clever Title</h1>
        <Search />
      </div>
    )
  }
}

export default Header;