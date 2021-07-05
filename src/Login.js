import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Nav from "./Nav"

function Login() {
  return (
    <div>
      <Nav/>
      <div className="nav">
        <div>
          <img
            id="logo"
            src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
          ></img>
        </div>
      </div>

      <div className="login">
        <div className="box">
          <h2>Sign In</h2>
          <form>
            <label>Username</label>
            <input placeholder="Username" className="input" required></input>
            <br />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input"
              required
            />
            <br />
            <center>
              <Link to="/main">
                <button className="btn">Log In</button>
              </Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
