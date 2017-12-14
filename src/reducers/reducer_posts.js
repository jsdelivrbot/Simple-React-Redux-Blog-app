import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';

// see https://lodash.com/docs/#mapKeys for info on _.mapKeys()

// so basiclly you default the state in params and default it to the datatype your gonna use it for
export default function (state = {}, action)
{
    switch(action.type)
    {
        case FETCH_POSTS: // parse array into an object.
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST: // we dont wanna throw away all our
            // old posts from this piece of state so 
            // we add to the object
            const { data } = action.payload;
            // what we return is equal to this
            // const post = action.payload.data;
            // const newState = {...state};
            // newState[post.id] = post;
            // es6 way of doing things - we using key interpolation
            return {...state, [data.id]: data };

        default: return state;
    }
    
}