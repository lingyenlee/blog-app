import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//put all the reducers in the root reduceer file
import rootReducer from './reducers'

//set initial state as an empty object
const initialState = {}

//put middleware to use in an array
const middleware = [thunk];

//create store with createStore, takes in root reducer, initial, middlewares (use the thunk in the compose withdevtools)
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));


export default store;