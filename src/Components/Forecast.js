import React, { Component } from 'react';
import Api from '../util/Api';
import * as queryString from 'query-string';

class WeatherWidget extends Component {

}

class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const param = queryString.parse(this.props.location.search);
    Api.getForecast(param.city)
    .then((response) => {
      console.log(response)
    });
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default Forecast;