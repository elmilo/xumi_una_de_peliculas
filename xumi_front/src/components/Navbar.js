import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.svg";

class Navbar extends Component {
  logOut(e) {
    e.preventDefault();
    //localStorage.removeItem("usertoken");
    this.props.handleLogout();
    //this.props.history.push("/");
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Registro
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav .bg-danger">
        <li className="nav-item">
          <Link to="/SearchProfile" className="nav-link">
            Buscar pelis
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Mi Perfil
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Salir
          </a>
        </li>
      </ul>
    );
    /**
     * 
     * <a class="navbar-brand" >
                <Link to="/" className="nav-link">                                
                  <img src={logo} className="App-logo" alt="logo" />
                </Link>
              </a>
              
     */
    /*
    {this.props.loginStatus ? '<nav className="navbar navbar-expand-lg navbar-light">':
      '<nav className="navbar navbar-expand-lg navbar-light">'}
      */
    //</nav>'bg-warning' :'bg-light'} 
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-link">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          {this.props.loginStatus ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
