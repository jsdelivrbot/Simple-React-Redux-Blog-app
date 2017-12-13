import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
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
 */
export function createPost()
{
    return {
        type: CREATE_POST,
        payload: null
    };
}