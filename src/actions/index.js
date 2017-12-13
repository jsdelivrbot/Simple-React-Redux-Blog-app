import axios from 'axios';

const ROOT_API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'kinger27345';

export const FETCH_POSTS = "FETCH_POSTS";
export function fetchPosts()
{
    const request = axios.get(`${ROOT_API_URL}/posts?key=${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}