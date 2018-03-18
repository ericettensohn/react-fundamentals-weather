import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: 'Atlanta, GA'
    }
  }

  handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      console.log('enter')
      this.props.history.push(`/forecast?city=${event.target.value}`)
    }

    this.setState({ city: event.target.value });
  }

  render () {
    const match = this.props.match;

    return (
      <div className='search-container'>
        <input placeholder='Atlanta, Ga' onKeyPress={this.handleKeyPress} />
        <Link
        className={"button " + (this.props.layout == 'stacked' ? 'block' : '')}
        to={{
          pathname: `/forecast`,
          search: `?city=${this.state.city}`
        }}
        >
          Get Weather
        </Link>
      </div>

    )
  }
}

export default withRouter(Search)