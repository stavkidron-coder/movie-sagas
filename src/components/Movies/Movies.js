import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Card, CardBody, CardTitle, CardText, Jumbotron} from 'reactstrap';
import './Movies.css';

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

    handleClick = (movie) => {
        console.log('Clicked');
        // navigate to /details page
        this.props.history.push('/details');
        // pass down movie id to details and then perform a get request with the id as a search
        this.props.dispatch({type: 'GET_SPECIFIC_INFO', payload: movie.id});
    }

    render() {
        return (
            <div className="moviesBody">
                
                <Jumbotron className="moviesJumbotron">
                    <h1>Movies!</h1>
                </Jumbotron>

                <Container>

                <div>
                    {/* AddMovie button */}
                    <Button color="primary" onClick={this.addMovieBtn}>Add Movie</Button>
                </div>

                <div>
                    {this.props.reduxState.movies.map((movie) => {
                        return <div key={movie.id} className="movieList">
                            <Card className="movieCards">

                                <CardBody>
                                    <CardTitle tag="h5" className="cardTitle">
                                        <div>
                                            <h5>{movie.title}</h5>
                                        </div>
                                    </CardTitle>
                                </CardBody>
                               
                                <img width="100%" src={movie.poster} alt={movie.description}/>

                                <CardText className="cardText">
                                    <Button onClick={() => this.handleClick(movie)}>
                                        Details
                                    </Button>
                                </CardText>
                           

                            </Card>
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