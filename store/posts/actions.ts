export const types = {
    GET_ALL_POSTS_SUCCESS: 'GET_ALL_POSTS_SUCCESS',
    GET_CURRENT_POST_SUCCESS: 'GET_CURRENT_POST_SUCCESS',
    CLEAR_CURRENT_POST: 'CLEAR_CURRENT_POST',
    CREATE_POST_START_SUCCESS: 'CREATE_POST_START_SUCCESS',
    CREATE_COM_START_SUCCESS: 'CREATE_COM_START_SUCCESS',
    DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
};

// get all posts
export const getPostsSuccess = (allPosts: any) => {
    return {
        type: types.GET_ALL_POSTS_SUCCESS,
        payload: {
            posts: allPosts,
        },
    };
};

// get current post
export const getCurrentPostSuccess = (post: any) => ({
    type: types.GET_CURRENT_POST_SUCCESS,
    payload: {
        post,
    },
});

// clear current post
export const clearCurrentPost = () => ({
    type: types.CLEAR_CURRENT_POST,
});

// create post
export const createPostSuccess = (post: any) => ({
    type: types.CREATE_POST_START_SUCCESS,
    payload: {
        newpost: post,
    },
});

//create comment
export const createComSuccess = (com: any) => ({
    type: types.CREATE_COM_START_SUCCESS,
    payload: {
        newcom: com,
    },
});

// delete post
export const deletePostSuccess = (postId: any) => ({
    type: types.DELETE_POST_SUCCESS,
    payload: {
        id: postId,
    },
});
