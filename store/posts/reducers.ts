import { types } from './actions';
import { combineReducers } from 'redux';

const postsReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case types.GET_ALL_POSTS_SUCCESS:
            return [...action.payload.posts];
        case types.CREATE_POST_START_SUCCESS:
            return [...state, action.payload.newpost];
        case types.CREATE_COM_START_SUCCESS:
            return [...state, action.payload.newcom];
        case types.DELETE_POST_SUCCESS:
            return state.filter((el: any) => el.id !== action.payload.id);
        default:
            return state;
    }
};

const currentPostReducer = (state: any = null, action: any) => {
    switch (action.type) {
        case types.GET_CURRENT_POST_SUCCESS:
            return action.payload.post;
        case types.CLEAR_CURRENT_POST:
            return null;
        default:
            return state;
    }
};

export default combineReducers({
    posts: postsReducer,
    currentPost: currentPostReducer,
});
