import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';

class AddMovie extends Component {

    homeBtn = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <div>
                    <p>Add Movie Page</p>
                    <Button outline color="primary" onClick={this.homeBtn}>Home</Button>
                </div>

                <div>
                    <input placeholder="Movie Title"/>
                    <input placeholder="Image URL"/>
                    <input placeholder="Movie Description"/>

                    <select name="genres" id="genres">
                        <option value="select">Select Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="animated">Animated</option>
                        <option value="biographical">Biographical</option>
                        <option value="comedy">Comedy</option>
                        <option value="disaster">Disaster</option>
                        <option value="drama">Drama</option>
                        <option value="epic">Epic</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="musical">Musical</option>
                        <option value="romantic">Romantic</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="space-opera">Space-Opera</option>
                        <option value="superhero">Superhero</option>
                    </select>
                </div>
            </>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);