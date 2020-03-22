import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'
import MyMovies from './MyMovies'

//http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.userData.username,
      logged: this.props.loginStatus,
      errors: {}
    }    
  }  
   

  render() {    
    const loggedRender = (
      <div className="container-fluid">      
      <MyMovies 
        searchUsername = {this.state.username}
      />
      </div>
    );

    const notLoggedRender = (
      <h1>
        ¡POR FAVOR LOGUEESE!
      </h1>
    );
    
    return (<div>
      {this.state.logged ? loggedRender : notLoggedRender}
      </div>
    )
  }
}

export default Profile
