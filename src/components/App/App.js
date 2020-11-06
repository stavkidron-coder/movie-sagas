import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Movies/>
          {/* ADD PAGES! */}
        </Router>
        <p>Empty Page</p>

      </div>
    );
  }
}

export default App;
