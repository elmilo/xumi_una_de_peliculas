import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import SearchProfile from "./components/SearchProfile";
import Landing from "./components/Landing";

//https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md

class App extends Component {
  constructor() {
    super();

    this.state = {
      loginStatus: false,
      userData: {}
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessAuth = this.handleSuccessAuth.bind(this);
  }


  handleLogout() {
    this.setState({
      loginStatus: false,
      userData: {}
    });
  }


  handleSuccessAuth(loginData) {
    if (loginData !== undefined) {
      this.setState({
        loginStatus: true,
        userData: loginData
      });
    } else {
      this.setState({
        loginStatus: false
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            loginStatus={this.state.loginStatus}
            handleLogout={this.handleLogout}
          />

          <Route exact path="/">
            {this.state.loginStatus ? <Redirect to="/searchprofile" /> : null}
          </Route>

          <Route exact path="/login">
            {this.state.loginStatus ? <Redirect to="/searchprofile" /> : null}
          </Route>

          <Route exact path="/register">
            {this.state.loginStatus ? <Redirect to="/searchprofile" /> : null}
          </Route>

          <Route exact path="/profile">
            {!this.state.loginStatus ? <Redirect to="/" /> : null}
          </Route>

          <Route exact path="/searchprofile">
            {!this.state.loginStatus ? <Redirect to="/" /> : null}
          </Route>

          <Route exact path={"/"} render={props => <Landing />} />

          <div className="container-fluid">
            <Route
              exact
              path={"/register"}
              render={props => (
                <Register handleSuccessAuth={this.handleSuccessAuth} />
              )}
            />

            <Route
              exact
              path={"/login"}
              render={props => (
                <Login handleSuccessAuth={this.handleSuccessAuth}
                />
              )}
            />
          
          <Route
              exact
              path={"/profile"}
              render={props => (
                <Profile
                  userData={this.state.userData}
                  loginStatus={this.state.loginStatus}
                />
              )}
            />

            <Route
              exact
              path={"/searchprofile"}
              render={props => (
                <SearchProfile
                  userData={this.state.userData}
                  loginStatus={this.state.loginStatus}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

// <Route exact path="/register" component={Register} />
export default App;
