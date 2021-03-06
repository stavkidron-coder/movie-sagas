import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
// import Bottstrap-react
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovies);
    yield takeEvery('GET_SPECIFIC_INFO', getSpecificInfo);
    yield takeEvery('ADD_NEW_MOVIE', addMovie);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state=[], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            console.log('movieDetails reducer:', action.payload);
            return action.payload;
        default:
            return state;
    }
}

function* getMovies(){
    const moviesResponse = yield axios.get(`/api/movie/`);
    console.log('MOVIES', moviesResponse);
    yield put({type: 'SET_MOVIES', payload: moviesResponse.data});
}

function* getSpecificInfo(action) {
    yield console.log('getSpecificInfo:', action.payload);
    // GET request for id parameter
    try {
        const infoResponse = yield axios.get(`/api/movie/${action.payload}`);
        console.log('infoResponse:', infoResponse.data);
        
        yield put({type: 'SET_MOVIE_DETAILS', payload: infoResponse.data});
    }
    catch (error) {
        console.log('ERROR in SET DETAILS', error);
    }
}

function* addMovie(action){
    try {
        yield axios.post('/api/movie', action.payload);
    }
    catch (error) {
        console.log('ERROR in addMovie post', error);
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
