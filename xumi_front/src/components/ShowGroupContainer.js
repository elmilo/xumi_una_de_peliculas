import React from 'react';
import ShowCellElement from './ShowCellElement';
import GenericGroupContainer from './GenericGroupContainer';

class ShowGroupContainer extends GenericGroupContainer{

    renderMovies(movie, arrayIndex) {
        return (
            <React.Fragment key={arrayIndex}>
            <ShowCellElement 
                oneMovie={movie}
                username={this.state.username}
                DecrementNumberOfComment={this.props.DecrementNumberOfComment}
            />
            </React.Fragment>
         )
    }
}

export default ShowGroupContainer;