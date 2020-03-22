import React, { Component } from "react";
import { login } from "./UserFunctions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: {},
      password: {},
      errors: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      errors: false
    });

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        const userData = {
          username: res.username,
          email: res.email
        };

        this.props.handleSuccessAuth(userData);
      } else {
        this.setState({
          errors: true
        });
      }
    });
  }

  
  render() {

    const BadDataBanner = (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Ups...</strong> Los datos introducidos no son válidos
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );

    return (
      <div>
        <div>{this.state.errors ? BadDataBanner : null}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">En Xumi soy conocido por</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Tu nombre de usuario"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mi código de ingreso</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
