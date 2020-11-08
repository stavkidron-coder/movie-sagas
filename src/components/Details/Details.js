import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Button, Jumbotron, Media, Row, Col, Navbar, Nav, NavLink} from 'reactstrap';
import './Details.css';
import { HashRouter as Link } from "react-router-dom";

class Details extends Component {

    backBtn = () => {
        console.log('Back Btn clicked');
        this.props.history.push('/');
    }

    render() {
        return (
        <>
            <Navbar color="light" light expand="md">
                <Container>
                    <Nav className="mr-auto" navbar>
                        <NavLink href='http://localhost:3000/'>HOME</NavLink>
                        <NavLink href='http://localhost:3000/#/addMovie'>ADD MOVIE</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            {this.props.reduxState.movieDetails[0] &&
            <>
                <Jumbotron className="detailsJumbotron">
                    <Container>
                        <h1>{this.props.reduxState.movieDetails[0].title}</h1>
                    </Container>
                </Jumbotron>

                <Container className="detailsBody">

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
                    </Container>
                </>
                }
                <Container>
                    <Button
                        className="homeBtn"
                        onClick={this.backBtn}
                        color="primary">
                            Return to movies
                    </Button>
                </Container>
        </>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);