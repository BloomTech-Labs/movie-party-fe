import React, { useState } from "react";
import axios from "axios";
import "../authStyles.css";

const Register = props => {
  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    email: "",
    password: ""
  });

  const userInput = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const userRegistration = e => {
    e.preventDefault();
    axios
      .post(`https://movie-party-be-stag.herokuapp.com/api/register`, user)
      .then(res => {
        console.log(res);
        props.history.push("/login");
      })
      .catch(err => console.log(err, "for sure error"));
  };

  return (
    <div className="authContainer">
      <div className="inner-container">
        <div className="box register-box">
          <h1>Register</h1>
          <form onSubmit={userRegistration}>
            <label>First Name</label> <br />
            <input
              name="first_name"
              placeholder="First Name"
              type="text"
              onChange={userInput}
              value={user.first_name}
              autoComplete="off"
            />
            <br />
            <label>Last Name</label> <br />
            <input
              name="last_name"
              placeholder="Last Name"
              type="text"
              onChange={userInput}
              value={user.last_name}
              autoComplete="off"
            />
            <br />
            <label>Email</label> <br />
            <input
              name="email"
              placeholder="email"
              type="email"
              onChange={userInput}
              value={user.email}
              autoComplete="off"
            />
            <br />
            <label>Password</label> <br />
            <input
              name="password"
              placeholder="password"
              type="password"
              onChange={userInput}
              value={user.password}
              autoComplete="off"
            />
            <br />
            <button>Register</button>
            <p>
              NOTE: Upon clicking Register, please wait patiently <br /> for a
              moment or two...
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;