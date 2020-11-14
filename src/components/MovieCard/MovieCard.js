import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Button, Card, CardBody, CardTitle, CardText} from 'reactstrap';

class MovieCard extends Component {

    handleClick = (movie) => {
        console.log('Clicked');
        // navigate to /details page
        this.props.history.push('/details');
        // pass down movie id to details and then perform a get request with the id as a search
        this.props.dispatch({type: 'GET_SPECIFIC_INFO', payload: this.props.movie.id});
    }

    render(){
        return(
            <Card className="movieCards">

                <CardBody>
                    <CardTitle tag="h5" className="cardTitle">
                        <div>
                            <h5>{this.props.movie.title}</h5>
                        </div>
                    </CardTitle>
                </CardBody>
                               
                <img
                    width="100%"
                    src={this.props.movie.poster}
                    alt={this.props.movie.description}
                    onClick={() => this.handleClick(this.props.movie)}
                />

                <CardText className="cardText">
                    <Button onClick={() => this.handleClick(this.props.movie)}>
                        Details
                    </Button>
                </CardText>
                           

            </Card>
        )
    }

}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieCard);