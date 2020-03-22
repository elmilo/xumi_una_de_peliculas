import React, { Component } from 'react';

//TABULAR
class GenericGroupContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.moviesList,
            username: this.props.username,
        };
        this.renderMovies = this.renderMovies.bind(this);
      }
    
  /*  componentWillUnmount(){

    }*/
 
    render() {
        return (
            <table className="table table-striped">
                <thead></thead>
                <tbody>
                    <>
                    {this.state.movies.map(this.renderMovies)}
                    </>
                 </tbody>
            </table>
        )
    }   
}        

export default GenericGroupContainer;
