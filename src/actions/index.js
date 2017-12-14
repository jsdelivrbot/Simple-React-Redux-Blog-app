import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";

const ROOT_API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'kinger27345';

/**
 * Will start a request to fetch posts from REST api.
 */
export function fetchPosts()
{
    const request = axios.get(`${ROOT_API_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

/**
 * Will set a POST request to create a post.
 * this is ran when user submits the form to add a post.
 */
export function createPost(values, callback)
{
    const request = axios.post(`${ROOT_API_URL}/posts?key=${API_KEY}`, values)
        .then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    };
}

// grab a post from the rest api.
export function fetchPost(id)
{
    const request = axios.get(`${ROOT_API_URL}/posts/${id}?key=${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}