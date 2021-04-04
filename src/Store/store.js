import { createStore, combineReducers } from 'redux';
import plpCount from '../Store/reducer/plpreducer';
import addToCart from '../Store/reducer/addToCart'
import login from '../Store/reducer/login'
import { composeWithDevTools } from 'redux-devtools-extension';

// Combine the reducer
const rootReducer = combineReducers({
    plpcount1: plpCount,
    addToCart: addToCart,
    login: login,

});

// Create Redux store
const store = createStore(rootReducer, composeWithDevTools());

export default store;