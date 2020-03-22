import React, { Component } from "react";
import ShowGroupContainer from "./ShowGroupContainer";
import { SearchMyComments } from "./CommentFunctions";

class MyMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      WithMovies: false,
      OnHold: true,
      username: this.props.searchUsername,
      results: []
    };

    this.numberResults = 0;

    this.SearchCommentsWorker = this.SearchCommentsWorker.bind(this);
    this.DecrementNumberOfComment = this.DecrementNumberOfComment.bind(this);
  }

  componentDidMount() {
    this.SearchCommentsWorker();
  }

  DecrementNumberOfComment() {
    this.numberResults = this.numberResults - 1;

    //console.log("this.numberResults: ", this.numberResults);

    if (this.numberResults === 0) {
      this.setState({
        WithMovies: false
      });
    }
  }

  SearchCommentsWorker() {
    const searchCriteria = {
      username: this.state.username
    };

    SearchMyComments(searchCriteria).then(elements => {
      if (elements.length > 0) {
        console.log("okBusqueda! : ", elements);
        this.setState({
          results: elements,
          WithMovies: true,
          OnHold: false
        });
        this.numberResults = elements.length;
      } else {
        this.setState({
          WithMovies: false,
          OnHold: false
        });
      }
      console.log("this.state: ", this.state);
    });
  }

  render() {
    if (this.state.OnHold) {
      return (
        <div className="alert alert-info" role="alert">
          Buscando...
        </div>
      );
    }

    const WithoutMoviesRender = (
      <div className="alert alert-primary" role="alert">
        No tenés películas... buscá y comentá algunas
      </div>
    );
    const WithMoviesRender = (
      <div>
      <div className="alert alert-dark" role="alert">
        <p> <b>{this.state.username}</b>, estas son las películas que elegiste!</p>
      </div>
        <ShowGroupContainer
          moviesList={this.state.results}
          username={this.state.username}
          rendertype={true}
          DecrementNumberOfComment={this.DecrementNumberOfComment}
        ></ShowGroupContainer>
      </div>
    );

    return (
      <div className="container-fluid">
        {this.state.WithMovies ? WithMoviesRender : WithoutMoviesRender}
      </div>
    );
  }
}

export default MyMovies;
