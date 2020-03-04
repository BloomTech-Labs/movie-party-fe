import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css';
import logo from './assets/logo.png';
import apple from './assets/ios.png';
import balloon from './assets/balloon.png';
import theatre from './assets/theatre.png';

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
        <div style={{ backgroundImage: `url(${theatre})` }} className="header-container">
          <div className="header-info">
            <p className="header-paragraph">Whether you're going out or decide to Netflix and Chill, make it a party by inviting friends and family to your next movie night. </p>
            <button className="header-button">Join Now</button>
            <p className="header-paragraph-2">The group planning tool for film lovers. Coming soon to  <img src={apple} style={{ width: '15px', height: '18px' }} alt="apple logo" /> and Android.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-container">
          <div className="movie-header">
            <p className="movie-header-title">
              Movie Parties Happening Soon!
            </p>
          </div>
        </div>
      </section>

      <section>
          <p className="HIW-title">How it works</p>
      </section>

      <section>
        <div className="HIW-paragraph-container">
          <div className="paragraphs">
            <div className="top-paragraph">
              <p className="HIW-paragraphs">Create your party! Coordinate with friends and put all the details in one place.</p>
            </div>
            <div className="middle-paragraph">
              <p className="HIW-paragraphs">Staying in? Share the experience online with others by joining a public party.</p>
            </div>
            <div className="bottom-paragraph">
              <p className="HIW-paragraphs">Everyone is a critic! Contribute to the MP community and tell us what you thought.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bottom-container">
          <div className="bottom-info">
            <p className="bottom-paragraphs">Gather your friends and have a MOVIE PARTY today!</p>
            <button className="bottom-button">Join Now</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-terms"><Link style={{ textDecoration: 'none', color: 'black' }} to="/terms">Terms of Policy</Link></div>
            <div className="footer-privacy"><Link style={{ textDecoration: 'none', color: 'black' }} to="/privacy">Privacy</Link></div>
            <div className="footer-contact"><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact">Contact</Link></div>
          </div>
          <div className="footer-center">
            <img src={balloon} alt="balloon" />
          </div>
          <div className="footer-right">
            <div>© 2020 Movie Party</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;