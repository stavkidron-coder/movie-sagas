import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Button, Jumbotron, Media, Row, Col} from 'reactstrap';
import './Details.css';

class Details extends Component {

    backBtn = () => {
        console.log('Back Btn clicked');
        this.props.history.push('/');
    }

    render() {
        return (
            <Container className="detailsBody">
                {this.props.reduxState.movieDetails[0] &&
                <>
                <Jumbotron>
                    <h1>{this.props.reduxState.movieDetails[0].title}</h1>
                </Jumbotron>

                <Media>
                    <Media left>
                        <Media 
                            object
                            src={this.props.reduxState.movieDetails[0].poster}
                            alt={this.props.reduxState.movieDetails[0].title}
                        />
                    </Media>
                    <Media body className="mediaText">
                        <Row>
                            <Col xs="8">
                                <div className="movieDescription">
                                    <h5>Description</h5>
                                    <hr/>
                                    {this.props.reduxState.movieDetails[0].description}
                                </div>
                            </Col>

                            <Col xs="4">
                            <div className="genreList">
                                <h5>Genres</h5>
                                <hr/>
                                <ul>
                                    {this.props.reduxState.movieDetails.map((movie) => {
                                        return <li>{movie.name}</li>
                                    })}
                                </ul>
                            </div>
                            </Col>
                        </Row>
                        
                    </Media>
                </Media>

                {/* <img
                    src={this.props.reduxState.movieDetails[0].poster}
                    alt={this.props.reduxState.movieDetails.description}
                /> */}

                    {/* <p>{this.props.reduxState.movieDetails[0].description}</p> */}
                </>
                }

                <Button
                    className="homeBtn"
                    onClick={this.backBtn}
                    color="primary">
                        Return to movies
                </Button>
            </Container>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);