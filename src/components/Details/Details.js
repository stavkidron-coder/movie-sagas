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
                {this.props.reduxState.movieDetails[0] &&
                <>
                    <h3>{this.props.reduxState.movieDetails[0].title}</h3>
                    <img  src={this.props.reduxState.movieDetails[0].poster} alt={this.props.reduxState.movieDetails.description}/>
                    <p>{this.props.reduxState.movieDetails[0].description}</p>
                </>
                }
                <p>Genres:  </p>
                {this.props.reduxState.movieDetails.map((movie) => {
                    return <p>{movie.name}</p>
                })}

                <button onClick={this.backBtn}>Return to movies</button>
            </div>
        );
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);