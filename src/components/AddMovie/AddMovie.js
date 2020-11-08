import React, { Component } from 'react';
import { connect } from 'react-redux'
import './AddMovie.css';
import { Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron,
    Col,  
    } from 'reactstrap';


class AddMovie extends Component {

    state = {
        movie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }

    homeBtn = () => {
        this.props.history.push('/');
    }

    handleChange = (event, typeParam) => {
        this.setState({
          movie:{
            ...this.state.movie,
            [typeParam]: event.target.value
          }
          
        });
      }

    submitBtn = () => {
        console.log('movie to be submitted:', this.state.movie);
        this.props.dispatch({type: 'ADD_NEW_MOVIE', payload: this.state.movie});
        // alert to let user know the movie was added
        alert('Movie successfully added!');
        // redirect back to movies page
        this.props.history.push('/');
    }

    render() {
        
        return (
            <Container className="body">
                <Jumbotron className="addMovieJumbotron">
                    <Container>
                        <h1>Add a Movie!</h1>
                        <p>Enter in information to add a new movie to the database</p>
                        <hr></hr>
                        <Button color="primary" onClick={this.homeBtn}>Back to Movies</Button>
                    </Container>
                </Jumbotron>

                <Form>
                    <FormGroup>
                        <Col xs="4">
                            <Label htmlFor="titleInput">Movie Title</Label>
                            <Input id="titleInput" type="text" placeholder="Movie Title" onChange={(event) => this.handleChange(event, 'title')}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col xs="4">
                        <Label htmlFor="posterInput">Poster URL</Label>
                        <Input id="posterInput" placeholder="Image URL" onChange={(event) => this.handleChange(event, 'poster')}/>
                    </Col>
                    </FormGroup>
                    
                    <FormGroup>
                        <Col xs="4">
                            <Label htmlFor="descriptionInput">Movie Description</Label>
                            <Input id="descriptionInput" type="textarea" placeholder="Movie Description" onChange={(event) => this.handleChange(event, 'description')}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col xs="4">
                            <Label htmlFor="genreInput">Movie Genre</Label>
                            <Input 
                                type="select"
                                name="genres"
                                id="genreInput"
                                onChange={(event) => this.handleChange(event, 'genre_id')}
                            >
                                <option value="">Select  Genre</option>
                                <option value={1}>Adventure</option>
                                <option value={2}>Animated</option>
                                <option value={3}>Biographical</option>
                                <option value={4}>Comedy</option>
                                <option value={5}>Disaster</option>
                                <option value={6}>Drama</option>
                                <option value={7}>Epic</option>
                                <option value={8}>Fantasy</option>
                                <option value={9}>Musical</option>
                                <option value={10}>Romantic</option>
                                <option value={11}>Science Fiction</option>
                                <option value={12}>Space-Opera</option>
                                <option value={13}>Superhero</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup>
                        <Col>
                            <Button
                                className="button"
                                color="success"
                                onClick={this.submitBtn}>
                                    Save
                            </Button>
                            <Button
                                className="button"
                                color="danger"
                                onClick={this.homeBtn}>
                                    Cancel
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                
            </Container>
        );
        }
    }

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);