import React, { Component } from "react";
import nocover from "./no-cover.png";
import { DeleteOneOfMyComment } from "./CommentFunctions";
import moment from "moment";
import "moment/locale/es.js"

class ShowCellElement extends Component {
  constructor(props) {
    super(props);

    this.myMovie = this.props.oneMovie;
    //this.myIndex = this.props.indexProp;

    this.state = {
      isVisible: true,
      username: this.props.username
    };
    
    moment.locale('es');
    
    this.DeleteComment = this.DeleteComment.bind(this);
    //console.log("My movie: ", this.myMovie);
  }

  DeleteComment() {
    //console.log("Se hizo click, this.state: ", this.myMovie);

    const deletionCriteria = {
      _id: this.myMovie._id
    };
    
    this.props.DecrementNumberOfComment();

    DeleteOneOfMyComment(deletionCriteria).then(res => {
      if (res) {
        //console.log("Se eliminó algo: ", res);
        this.setState({
          isVisible: false
        });
      }
    });
  }

  render() {
    const visibleState = (
      <React.Fragment>
        <td>
          <img
            src={
              this.myMovie.posterURL === "false"
                ? nocover
                : this.myMovie.posterURL
            }
            className="Movie-Poster"
            alt={this.myMovie.movieTitle}
          />
        </td>
        <td>{this.myMovie.movieTitle}</td>
        <td>
          <input
            type="text"
            className="form-control form-control-md"
            size="256"
            name="myOpinion"
            placeholder={this.myMovie.comment}
            onChange={this.onChange}
            readOnly
          />
        </td>
        <td>creado &nbsp;
          {moment(this.myMovie.createDate).fromNow()}   
        </td>    
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.DeleteComment}
          >
            Eliminar :(
          </button>
        </td>
      </React.Fragment>
    );

    return <tr>{this.state.isVisible ? visibleState : null}</tr>;
  }
}

export default ShowCellElement;
