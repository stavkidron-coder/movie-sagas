import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Button} from 'reactstrap';

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
    }

    render() {
        return (
            <Container>
                <div>
                    <p>Add Movie Page</p>
                    <Button outline color="primary" onClick={this.homeBtn}>Home</Button>
                </div>

                <div>
                    <input type="text" placeholder="Movie Title" onChange={(event) => this.handleChange(event, 'title')}/>
                    <input placeholder="Image URL" onChange={(event) => this.handleChange(event, 'poster')}/>
                    <input placeholder="Movie Description" onChange={(event) => this.handleChange(event, 'description')}/>

                    <select name="genres" id="genres" onChange={(event) => this.handleChange(event, 'genre_id')}>
                        <option value={0}>Select Genre</option>
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
                    </select>

                    <Button outline color="success" onClick={this.submitBtn}>Add Movie</Button>
                </div>
            </Container>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);