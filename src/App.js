import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Components/Home';
import Forecast from './Components/Forecast';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/forecast' component={Forecast} />
            <Route render={() => <h1>Not Found!</h1>} />   
          </Switch>
        </div>     
      </Router>
    )
  }
}

export default App;
