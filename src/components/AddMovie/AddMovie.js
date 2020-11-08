import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddMovie extends Component {

    homeBtn = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Add Movie Page</p>
                <button onClick={this.homeBtn}>Home</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddMovie);