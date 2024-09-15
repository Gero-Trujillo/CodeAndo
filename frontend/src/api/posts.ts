// Importacion de axios.ts
import axios from './axios';

// Definicion de interfaz Post
interface Post {
    message: string;
    userId: number;
    username: string;
}

// Definicion de interfaz PostEdit
interface PostEdit{
    username: string;
}

// Exportacion de funciones API
export const getPosts = () => axios.get('/posts');
export const createPost = (post: Post) => axios.post('/posts', post);
export const deletePost = (postId: number) => axios.delete(`/posts/${postId}`);
export const getPost = (postId: number) => axios.get(`/posts/${postId}`);
export const getPostsByUser = (userId: number) => axios.get(`/posts/user/${userId}`);
export const updatePost = (userId: number, post: PostEdit) => axios.put(`/posts/${userId}`, post);