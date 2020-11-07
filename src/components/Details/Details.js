import React, { Component } from 'react';
import { connect } from 'react-redux'

class Details extends Component {

    backBtn = () => {
        console.log('Back Btn clicked');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Details Page</p>
                <button onClick={this.backBtn}>Return to movies</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);