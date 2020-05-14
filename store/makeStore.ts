import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './posts/reducers';

const initialState = {
    posts: [],
    currentPost: null,
};

export const makeStore = (preloadedState = initialState) => {
    return createStore(postReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};
