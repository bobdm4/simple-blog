import axios from 'axios';
axios.defaults.baseURL = 'https://simple-blog-api.crew.red';

export const getPosts = () => axios.get('/posts');

export const getPostInfo = (id: any) => axios.get(`/posts/${id}`);

export const createPost = (newPost: any) => axios.post('/posts', newPost);

export const deletePost = (id: any) => axios.delete(`/posts/${id}?_embed=comments`);

export const createComment = (newCom: any) => axios.post('/comments', newCom);
