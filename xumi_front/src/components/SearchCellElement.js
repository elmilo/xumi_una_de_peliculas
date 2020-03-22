import React, { Component } from "react";
import nocover from "./no-cover.png";
import { NewComment } from "./CommentFunctions";

class SearchCellElement extends Component {
  constructor(props) {
    super(props);

    this.myMovie = this.props.oneMovie;
    this.myIndex = this.props.indexProp;

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      myOpinion: "",
      myRating: "",
      isVisible: true,
      username: this.props.username
    };
  }

  handleClick() {
    if (this.state.myOpinion) {
      //console.log("Se hizo click, username: ", this.props.username);

      const possibleComment = {
        username: this.state.username,
        posterURL: this.myMovie.imagen,
        movieTitle: this.myMovie.title,
        comment: this.state.myOpinion
      };

      NewComment(possibleComment).then(res => {
        if (res) {
          this.setState({
            isVisible: false
          });
        }
      });
    } 
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const visibleState = (
      <React.Fragment key={this.myIndex}>
        <td>
          <img
            src={this.myMovie.imagen ? this.myMovie.imagen : nocover}
            className="Movie-Poster"
            alt={this.myMovie.title}
          />
        </td>
        <td>{this.myMovie.title}</td>
        <td>{this.myMovie.overview}</td>
        <td>
          <input
            type="text"
            className="form-control form-control-md"
            size="256"
            name="myOpinion"
            placeholder="¿Qué opino?"
            onChange={this.onChange}
          />
        </td>
        <td>
          <button className="btn btn-sm btn-primary" onClick={this.handleClick}>
            Guardo y desaparezco ;-)
          </button>
        </td>
      </React.Fragment>
    );

    return <tr>{this.state.isVisible ? visibleState : null}</tr>;
  }
}

export default SearchCellElement;
