import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Card, CardBody, CardTitle, CardText, Jumbotron} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Movies.css';
import MovieCard from '../MovieCard/MovieCard';

const plus = <FontAwesomeIcon icon={faPlus} />

class Movies extends Component {

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({type: 'GET_MOVIES'});
    }

    addMovieBtn = () => {
        this.props.history.push('/addMovie');
    }

    render() {
        return (
            <div className="moviesBody">
                
                <Jumbotron className="moviesJumbotron">
                    <Container>
                        <h1>Movies!</h1>
                        {/* AddMovie button */}
                        <Button color="primary" onClick={this.addMovieBtn}>{plus} Add Movie</Button>
                    </Container>
                    
                </Jumbotron>

                <Container>

                <div>
                    {this.props.reduxState.movies.map((movie) => {
                        return <div key={movie.id} className="movieList">
                            <MovieCard movie={movie} history={this.props.history}/>
                        </div>
                    })}
                </div>
                </Container>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Movies);