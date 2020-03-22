import React, { Component } from 'react'
import header from './header.jpg';

class Landing extends Component {
  render() {
    return(
    <div>
        <img src={header} className="landing-image" alt="Mis películas preferidas" />
        </div>
    )
  }
}
export default Landing
