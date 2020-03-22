import React from 'react';
import SearchCellElement from './SearchCellElement';
import GenericGroupContainer from './GenericGroupContainer';

//TABULAR

class SearchGroupContainer extends GenericGroupContainer{

    renderMovies(movie, arrayIndex) {
        return (
            <React.Fragment key={arrayIndex}>
            <SearchCellElement 
                indexProp={arrayIndex}   
                oneMovie={movie}
                username={this.state.username}
            />
            </React.Fragment>
         )
    }
}

export default SearchGroupContainer;
