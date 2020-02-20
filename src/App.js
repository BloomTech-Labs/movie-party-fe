import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import { exampleFunction } from './redux/actions/actions';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          movie party production
        </p>
        <button onClick={() => props.exampleFunction()}>redux console.log check</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {exampleFunction})(App);
