import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import Route from 'react-router-dom'
import './App.css';

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
}*/

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
    </div>
    );
  }
}


export default App;
