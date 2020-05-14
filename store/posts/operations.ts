import {
    createPostSuccess,
    createComSuccess,
    deletePostSuccess,
    getPostsSuccess,
    getCurrentPostSuccess,
} from './actions';
import * as API from '../../services/api';

export const getPostsOperation = () => (dispatch: any) => {
    API.getPosts().then((res) => {
        dispatch(getPostsSuccess(res.data));
    });
};

export const getCurrentPostOperation = (id: any) => (dispatch: any) => {
    API.getPostInfo(id).then((res) => {
        dispatch(getCurrentPostSuccess(res.data));
    });
};

export const createPostOperation = (newPost: any) => (dispatch: any) => {
    API.createPost(newPost).then((res) => {
        dispatch(createPostSuccess(res.data));
    });
};
export const createComOperation = (newCom: any) => (dispatch: any) => {
    API.createComment(newCom).then((res) => {
        dispatch(createComSuccess(res.data));
    });
};

export const deletePostOperation = (id: any) => (dispatch: any) => {
    API.deletePost(id).then(() => {
        dispatch(deletePostSuccess(id));
    });
};
