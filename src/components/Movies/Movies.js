import React, { Component } from 'react';
import { connect } from 'react-redux'

class Movies extends Component {

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    render() {
        return (
            <div>
                {this.props.reduxState.movies.map((movie) => {
                    return <div key={movie.id} className="movieList">
                        <button>
                            <img src={movie.poster}/>
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