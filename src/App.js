import React from 'react';
import './App.css';
import { exampleFunction } from './redux/actions/actions';
import Dashboard from './components/Dashboard/Dashboard.js';
import Movies from './components/Movies/Movies.js';
import Movie from './components/Movie/Movie.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import Register from './components/authentication/Register/Register'
import Login from './components/authentication/Login/Login'


import { connect } from "react-redux";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movie/:id" compoent={Movie} />

      <header className="App-header">
        {/* <p>
          movie party production
        </p> */}

        {/* this button is just a test to see if redux is working,
        it will be deleted when we add functionality to the app */}

        {/* <button onClick={() => props.exampleFunction()}>redux console.log check</button> */}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { exampleFunction })(App);
