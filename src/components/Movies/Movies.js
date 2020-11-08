import React, { Component } from 'react';
import { connect } from 'react-redux'

class Movies extends Component {

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    handleClick = (movie) => {
        console.log('Clicked');
        // navigate to /details page
        this.props.history.push('/details');
        // pass down movie id to details and then perform a get request with the id as a search
        this.props.dispatch({type: 'GET_SPECIFIC_INFO', payload: movie.id});
    }

    render() {
        return (
            <div>
                {this.props.reduxState.movies.map((movie) => {
                    return <div key={movie.id} className="movieList">
                        <button onClick={() => this.handleClick(movie)}>
                            <img src={movie.poster} alt={movie.description}/>
                        </button>
                    </div>
                })}
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Movies);