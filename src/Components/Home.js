import React, { Component } from 'react';
import Search from './Search'

class Home extends Component {
  render() {
    return (
      <div className="home-widget">
        <h1>Enter a City and State</h1>
        <Search layout="stacked" />
      </div>
    );
  }
}

export default Home;
