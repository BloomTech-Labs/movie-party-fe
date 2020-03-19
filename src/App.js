import React, { Component } from 'react';
import axios from 'axios'
import Route from 'react-router-dom'
import './App.css';
import navigation from './components/navigation'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          movie party production
        </p>
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
                <Link exact path to="/"><h1>Upcoming Parties</h1></Link>
                <Link to="/resume"><h1>Past Parties</h1></Link>
                <Link to="/projects"><h1>Friends</h1></Link>
                <Link to="/aboutme"><h1>Films</h1></Link>
                <Link to="/contact"><h1>WatchList</h1></Link>
                <Link to="/contact"><h1>Create New Party</h1></Link>
            </Navigation>
        </Drawer>
    </Layout>
</div>
     
    </div>
  );
}

export default App;


