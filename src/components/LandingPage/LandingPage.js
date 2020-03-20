import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';

import './LandingPage.css';
import logo from './assets/logo.png';
import apple from './assets/ios.png';
import balloon2 from './assets/balloon2.png';
import theatre from './assets/theatre.png';
// import dog from './assets/dogs.png';
// import spiderman from './assets/spiderman.png';
import movie1 from './assets/movie1.jpg';
import movie2 from './assets/movie2.jpg';
import movie from './assets/movie.png'

function LandingPage() {
  const [movies, setMovies] = useState([])
  console.log(movies)
  useEffect(() => {
    axios.get(`http://data.tmsapi.com/v1.1/movies/showings?startDate=2020-03-27&zip=84109&api_key=bfektnnhgkfb4x7yuqwykfsp`)
      .then(res => {
        console.log(res.data[0].preferredImage.uri)
        return setMovies(res.data)
      })
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  // var movieData = http://developer.tmsimg.com/' + movie.preferredImage.uri?api_key=bfektnnhgkfb4x7yuqwykfsp
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
            <p className="header-paragraph">Whether you're going out or decide to Netflix and Chill, make it a party by inviting friends and family to your next movie night </p>
            <button className="header-button">Plan Your First Party</button>
            <p className="header-paragraph-2">The group planning tool for film lovers. Coming soon to iOS and Android</p>
          </div>
        </div>
      </section>

      <section>
        <div className="HIW-paragraph-container">
          <div className="paragraphs">
            <div className="top-paragraph">
              <div>
                <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Create Your</div>
                <div style={{ color: '#CD1F25', fontSize: '40px', fontWeight: 'bold' }}>Party</div>
                <p style={{ fontSize: '20px', fontFamily: 'Merriweather' }}>Never see a movie alone again! Coordinate with friends and easily put all the details in one place.</p>
              </div>
              <img className="filler-pics" src={movie1} alt="movie1-picutre" />
            </div>
            <div className="middle-paragraph">
              <img className="filler-pics" src={movie2} alt="movie2-pic" />
              <div className="middle-header">
                <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Staying in?</div>
                <div style={{ color: '#CD1F25', fontSize: '40px', fontWeight: 'bold' }}>Share The Experience</div>
                <p style={{ fontSize: '20px', fontFamily: 'Merriweather' }}>Join a public party and watch a movie online with others.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-container">
          <div className="movie-header">
            <p className="movie-header-title">
              Movie Parties Happening Soon!
            </p>
            <Slider className="slider" {...settings}>
              {movies.map(movie => (
                <div className="single-movie-container" key={movie.rootId}>
                  <h3>{movie.title}</h3>
                  <img src={`http://developer.tmsimg.com/${movie.preferredImage.uri}?api_key=bfektnnhgkfb4x7yuqwykfsp`} />
                  <p>{movie.releaseDate}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="bottom-container">
          <div className="bottom-info-left">
            <p className="bottom-paragraphs" style={{ fontSize: '25px', color: 'black' }}>Invite your friends and have a</p>
            <p className="bottom-paragraphs" style={{ color: '#CD1F25' }}>MOVIE PARTY</p>
            <button className="bottom-button">Join Now For Free</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-terms"><Link style={{ textDecoration: 'none', color: 'white' }} to="/terms">Terms of Policy</Link></div>
            <div className="footer-privacy"><Link style={{ textDecoration: 'none', color: 'white' }} to="/privacy">Privacy</Link></div>
            <div className="footer-contact"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">Contact</Link></div>
          </div>
          <div className="footer-center">
            <img src={balloon2} alt="balloon" />
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