import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "./LandingPage.css";
import moviepartylogo from "./assets/moviepartylogo.png";
import balloon2 from "./assets/balloon2.png";
import theatre from "./assets/theatre.png";
import movie1 from "./assets/movie1.jpg";
import movie2 from "./assets/movie2.jpg";
import movie from "./assets/movie.png";
import blackpanther from "./assets/blackpanther.jpg";
import endgame from "./assets/endgame.jpg";
import davincicode from "./assets/davincicode.jpg";
import potc from "./assets/potc.jpg";
import sherlockholmes from "./assets/sherlockholmes.jpg";
import halloween from "./assets/halloween.jpg";
import lotr from "./assets/lotr.jpg";
import tron from "./assets/tron.jpg";
import nationaltreasure from "./assets/nationaltreasure.jpg";

function LandingPage() {
  const [movies, setMovies] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="landing-page-container">
      <nav>
        <div className="navbar-container">
          <div className="navbar-logo">
            <img className="logo" src={moviepartylogo} alt="placeholder-logo" />
          </div>
          <div className="navbar-about">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </div>
          <div className="navbar-login">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      <section>
        <div
          style={{ backgroundImage: `url(${theatre})` }}
          className="header-container"
        >
          <div className="header-info">
            <p className="header-paragraph">
              Whether you're going out or decide to Netflix and Chill, make it a
              party by inviting friends and family to your next movie night{" "}
            </p>
            <button className="header-button">Plan Your First Party</button>
            <p className="header-paragraph-2">
              The group planning tool for film lovers. Coming soon to iOS and
              Android
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="HIW-paragraph-container">
          <div className="paragraphs">
            <div className="top-paragraph">
              <div>
                <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Create Your
                </div>
                <div
                  style={{
                    color: "#CD1F25",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Party
                </div>
                <p style={{ fontSize: "20px", fontFamily: "Merriweather" }}>
                  Never see a movie alone again! Coordinate with friends and
                  easily put all the details in one place.
                </p>
              </div>
              <img className="filler-pics" src={movie1} alt="movie1-picutre" />
            </div>
            <div className="middle-paragraph">
              <img className="filler-pics" src={movie2} alt="movie2-pic" />
              <div className="middle-header">
                <div style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Staying in?
                </div>
                <div
                  style={{
                    color: "#CD1F25",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Share The Experience
                </div>
                <p style={{ fontSize: "20px", fontFamily: "Merriweather" }}>
                  Join a public party and watch a movie online with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="movie-container">
          <div className="movie-header">
            <div
              className="movie-header-title"
              style={{ fontSize: "25px", fontFamily: "Lato" }}
            >
              Check Out Todays
            </div>
            <div
              className="movie-header-title"
              style={{ fontSize: "40px", fontFamily: "Lato", color: "#CD1F25" }}
            >
              Parties
            </div>
            <Slider {...settings}>
              <div style={{ maxWidth: "100%", height: "auto" }}>
                <img
                  src={blackpanther}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>Black Panther</div>
                <div style={{ textAlign: "center" }}>2016</div>
              </div>
              <div style={{ maxWidth: "100%", height: "auto" }}>
                <img
                  src={endgame}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>Avengers: Endgame</div>
                <div style={{ textAlign: "center" }}>2019</div>
              </div>
              <div style={{ maxWidth: "100%", height: "auto" }}>
                <img
                  src={davincicode}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>The Da Vinci Code</div>
                <div style={{ textAlign: "center" }}>2006</div>
              </div>
              <div>
                <img
                  src={potc}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  Pirates of the Caribbean: The Curse of the Black Pearl
                </div>
                <div style={{ textAlign: "center" }}>2003</div>
              </div>
              <div>
                <img
                  src={sherlockholmes}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>Sherlock Holmes</div>
                <div style={{ textAlign: "center" }}>2009</div>
              </div>
              <div>
                <img
                  src={halloween}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>Halloween</div>
                <div style={{ textAlign: "center" }}>2018</div>
              </div>
              <div>
                <img
                  src={lotr}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  The Lord of the Rings: The Fellowship of the Ring
                </div>
                <div style={{ textAlign: "center" }}>2001</div>
              </div>
              <div>
                <img
                  src={tron}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>Tron: Legacy</div>
                <div style={{ textAlign: "center" }}>2010</div>
              </div>
              <div>
                <img
                  src={nationaltreasure}
                  alt="movie"
                  style={{
                    height: "700px",
                    width: "450px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <div style={{ textAlign: "center" }}>National Treasure</div>
                <div style={{ textAlign: "center" }}>2004</div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section>
        <div className="bottom-container">
          <div className="bottom-info-left">
            <p
              className="bottom-paragraphs"
              style={{ fontSize: "25px", color: "black" }}
            >
              Invite your friends and have a
            </p>
            <p className="bottom-paragraphs" style={{ color: "#CD1F25" }}>
              MOVIE PARTY
            </p>
            <button className="bottom-button">Join Now For Free</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-terms">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/terms"
              >
                Terms of Policy
              </Link>
            </div>
            <div className="footer-privacy">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/privacy"
              >
                Privacy
              </Link>
            </div>
            <div className="footer-contact">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                Contact
              </Link>
            </div>
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
  );
}

export default LandingPage;
