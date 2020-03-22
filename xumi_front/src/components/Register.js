import React, { Component } from "react";
import { register } from "./UserFunctions";
import { userExists } from "./UserFunctions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: {},
      email: {},
      password: {},
      confirm_password: {},
      errors: {},
      userExists: false,
      userCreatedNow: false,
      formIsValid: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.tryToCreateNewUser = this.tryToCreateNewUser.bind(this);
    //this.handleValidation = this.handleValidation.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /********************************************************/

  handleValidation(userData) {
    let formIsValid = true;

    var errors = {
      username: "",
      email: "",
      password: ""
    };

    //username
    if (userData.username === "") {
      console.log("username no valido");
      formIsValid = false;
      errors.username = "Nombre de usuario vacío";
    }

    //password
    if (userData.password === "") {
      console.log("Password vacío");
      formIsValid = false;
      errors.username = "Password vacío";
    }

    //Email
    if (userData.email === "") {
      console.log("Email vacío");
      formIsValid = false;
      errors.email = "Email vacío";
    } else if (typeof userData.email !== "undefined") {
      if (!userData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        console.log("Email no valido");
        formIsValid = false;
        errors.email = "Email no válido";
      }
    }

    this.setState({ errors: errors, formIsValid: formIsValid });
    /*console.log("this.state: ", this.state);
    console.log("errors ", errors);*/
    return formIsValid;
  }

  /*********************************************************/
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    if (this.handleValidation(newUser)) {
      //console.log("this.tryToCreateNewUser(newUser);");
      this.setState({ formIsValid: true });
      this.tryToCreateNewUser(newUser);
    } else {
      console.log("Errores: ", this.state.errors);
    }
  }

  tryToCreateNewUser(newUser) {
    userExists(this.state.username)
      .then(userExists => {
        if (userExists) {
          this.setState({
            userExists: true,
            userCreatedNow: false
          });
          console.log("returnVal - ", userExists);
        } else {
          register(newUser).then(res => {
            if (res) {
              this.setState({
                userExists: false,
                userCreatedNow: true
              });
              //console.log("Creado nueuvo usuaauaario");
              //console.log("createdUser: ", createdUser)
              this.props.handleSuccessAuth(newUser);
            }
          });
        }
      })
      .catch(err => console.log("Axios err: ", err));
  }

  render() {
    const UserExistsBanner = (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>El usuario ya existe</strong> Pensá en otro, podés ser más
        creativo
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

    const UserCreatedNowBanner = (
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">¡Bien ahí!</h4>
        <p>
          Ahora vas a poder disfrutar de las funcionalidades de esta hermosa
          plataforma de películas y comentarios.
        </p>
          <p className="mb-0">Aprovechá la cuarente :P</p>
      </div>
    );

    const FieldsErrorsBanner = (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> Chequeá los datos introducidos porque
        tenés:
        <p>{this.state.errors.username}</p>
        <p>{this.state.errors.password}</p>
        <p>{this.state.errors.email}</p>
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
        <div>{!this.state.formIsValid ? FieldsErrorsBanner : null}</div>
        <div>{this.state.userExists ? UserExistsBanner : null}</div>
        <div>{this.state.userCreatedNow ? UserCreatedNowBanner : null}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">¡Registrate!</h1>
                <div className="form-group">
                  <label htmlFor="name">Quiero ser conocido por</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Elegí un nombre de usuario"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Dirección de email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Tu email!"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
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
                  Quiero ser parte de Xumi!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
