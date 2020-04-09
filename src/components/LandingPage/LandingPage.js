import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
import logo from './assets/logo.png'
import apple from './assets/ios.png'

function LandingPage() {
  return (
    <div className="landing-page-container">
      <nav>
        <div className="navbar-container">
          <div className="navbar-logo"><img className="logo" src={logo} alt="placeholder-logo" /></div>
          <div className="navbar-about"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></div>
          <div className="navbar-login"><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></div>
        </div>
      </nav>
      <section>
        <div className="header-container">
          <div className="header-info">
            <p className="header-paragraph">Whether you're going out or decide to Netflix and Chill, make it a party by inviting friends and family to your next movie night. </p>
            <button className="header-button">Join Now</button>
            <p className="header-paragraph-2">The group planning tool for film lovers. Coming soon to  <img src={apple} style={{width: '15px', height: '18px'}} alt="apple logo"/> and Android.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage;