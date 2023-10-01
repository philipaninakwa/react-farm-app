import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="login-page">
          <nav>
            <div className="nav-container">
              <h1>GreenFarm</h1>
            </div>
          </nav>
          <section id="login-section">
            <div className="login-container">
              <div className="first-item-container">
                <div className="first-shade"></div>
                <div className="content-wrapper">
                  <div className="content">
                    <input type="text" placeholder="username or e-mail" />
                    <input type="password" placeholder="password" />
                    <Link className="sign-in">Sign In</Link>
                    <div className="links">
                      <Link>Forgot password?</Link>
                      <Link>Create new account</Link>
                    </div>
                    <div className="alt-links">
                      <Link>Sign in with Google</Link>
                      <Link>Sign in with Apple</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LoginPage;
