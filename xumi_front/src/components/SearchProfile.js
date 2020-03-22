import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import DeluxeSearch from './DeluxeSearch'


class SearchProfile extends Component {
  constructor() {
    super()
    this.state = {
      username: {},
      dbID: {},
      email: {},
      errors: {}
    }
  }
  
  componentDidMount() {

   /* const usertoken = localStorage.getItem("usertoken");
    console.log('Profile - usertoken: ', usertoken);

    if (usertoken !== "undefined") {
      const decoded = JSON.parse(usertoken);
      console.log('Profile - decoded: ', decoded);
      this.setState({
        username: decoded.username,
        email: decoded.email      
      })
    }*/    
    //console.log('this.props.userData: ', this.props.userData);
    //console.log('this.state: ', this.state);//No actualiza, uso props
  }
 
  render() {
    
    const logged = (
      <div className="container-fluid">
        <div className="alert alert-dark" role="alert">
        <p>¡Hola: <b>{this.props.userData.username}</b>, aquí puedes buscar las películas que desees!</p>
      </div>      
      <DeluxeSearch username={this.props.userData.username}/>
      </div>
    );

    const notLogged = (
      <h1>
        ¡POR FAVOR LOGUEESE!
      </h1>
    );
    
    return (<div>
      {this.props.loginStatus ? logged : notLogged}
      </div>
    )
  }
}

export default SearchProfile
