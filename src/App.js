import React from 'react';
import './App.css';
import { exampleFunction } from './redux/actions/actions';
import Dashboard from './components/Dashboard/Dashboard.js';
import Movies from './components/Movies/Movies.js';
import Movie from './components/Movie/Movie.js';
import LandingPage from './components/LandingPage/LandingPage.js';

import { connect } from "react-redux";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movie/:id" compoent={Movie} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { exampleFunction })(App);
