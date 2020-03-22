import React, { Component } from "react";
import MovieFinder from "./MovieFinder";
import SearchGroupContainer from "./SearchGroupContainer";

class DeluxeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tituloBuscar: "",
      results: [],
      username: "",
      SuccessSearchFlag: false,
      newSearch: true
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /*
        Sincronizo la respuesta:
    */
  okBusqueda(resultados) {
    this.setState({
      SuccessSearchFlag: false
    });
    //console.log('okBusqueda: ', resultados);
    this.setState({
      results: resultados,
      SuccessSearchFlag: true,
      username: this.props.username
    });
    //console.log('Deluxe search: resultados - ', resultados);
  }

  onSearch(e) {
    e.preventDefault();
    MovieFinder.buscarTitulo(
      this.state.tituloBuscar,
      this.okBusqueda.bind(this)
    );
  }

  render() {
    const SuccessSearchContainer = (
      <SearchGroupContainer
        moviesList={this.state.results}
        username={this.state.username}
      ></SearchGroupContainer>
    );

    return (
      <div className="container-fluid">
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            name="tituloBuscar"
            placeholder="Aquí escribe la peli que quieras"
            aria-label="Aquí escribe la peli que quieras"
            size="64"
            onChange={this.onChange}
            value={this.state.tituloBuscar}
          />

          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-outline-primary mb-3"
              onClick={this.onSearch}
            >
              Buscar
            </button>
          </div>
        </div>

        {this.state.SuccessSearchFlag ? SuccessSearchContainer : null}
      </div>
    );
  }
}

export default DeluxeSearch;
