import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Login() {
  return (
    <React.Fragment>
      <section class="container">
        {
          //<div class="alert alert-danger">Invalid credentials</div>
        }
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" action="dashboard.html">
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </React.Fragment>
  );
}
export default Login;
