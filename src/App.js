import React, { Component } from 'react';
import axios from 'axios'
import Route from 'react-router-dom'
import './App.css';
import navigation from './components/navigation'
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
      <header className="App-header">
        <p>
          movie party production
        </p>

        {/* this button is just a test to see if redux is working,
        it will be deleted when we add functionality to the app */}

        <button onClick={() => props.exampleFunction()}>redux console.log check</button>
      </header>
    </div>
  );
}
class App extends Component {
  componentDidMount() {
    axios
    .get('https://movie-party-be-prod.herokuapp.com/api/users')
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <navigation></navigation>
    </div>
    );
  }
}*/
import {Link} from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

function App() {
  return (
    <div className="App">
    <div className="demo-big-content">
    <Layout>
        <Header className ="header-color" scroll>
            <h1>MOVIE PARTY</h1>
        </Header>
        <Drawer>
            <Navigation className="navigation-color">
                <Link exact path to="/Upcoming"><h1>Upcoming Parties</h1></Link>
                <Link to="/Past"><h1>Past Parties</h1></Link>
                <Link to="/Friends"><h1>Friends</h1></Link>
                <Link to="/Films"><h1>Films</h1></Link>
                <Link to="/Watchlist"><h1>WatchList</h1></Link>
                <Link to="/NewParty"><h1>Create New Party</h1></Link>
            </Navigation>
        </Drawer>
    </Layout>
</div>
     
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { exampleFunction })(App);
