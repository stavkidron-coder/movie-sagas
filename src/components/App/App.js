import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path='/' component={Movies}/>
          <Route exact path='/details' component={Details}/>
          <Route path='/addMovie' component={AddMovie}/>
        </Router>

      </div>
    );
  }
}

export default App;
