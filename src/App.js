import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { NavigationBar } from "./components/navigation";
import { exampleFunction } from "./redux/actions/actions";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Movies from "./components/Movies/Movies.js";
import Movie from "./components/Movie/Movie.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        {/* <NavigationBar /> */}
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movie/:id" compoent={Movie} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { exampleFunction })(App);
