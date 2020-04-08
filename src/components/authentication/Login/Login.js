import React, { useState } from "react";
import authAxios from "../../../utils/authAxios";
import { Link } from "react-router-dom";
import "../authStyles.css";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const userInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = (e) => {
    e.preventDefault();
    authAxios()
      .post(`https://movie-party-be-stag.herokuapp.com/api/login`, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/");
      })
      .catch((err) => console.log(err, "for sure error"));
  };

  return (
    <div className="authContainer">
      <div className="inner-container">
        <div className="box">
          <h1>Login</h1>
          <form onSubmit={userLogin}>
            <label>email</label> <br />
            <input
              name="email"
              placeholder="email"
              type="email"
              onChange={userInput}
              value={user.email}
              autoComplete="off"
            />
            <br />
            <label>password</label> <br />
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={userInput}
              value={user.password}
              autoComplete="off"
            />
            <br />
            <button>Login</button>
            <p>
              Not a member?{" "}
              <Link to="/register">
                <span>Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
