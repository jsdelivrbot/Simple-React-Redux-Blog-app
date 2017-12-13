import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

// see https://lodash.com/docs/#mapKeys for info on _.mapKeys()

// so basiclly you default the state in params and default it to the datatype your gonna use it for
export default function (state = {}, action)
{
    switch(action.type)
    {
        case FETCH_POSTS: 
            return _.mapKeys(action.payload.data, 'id');
        
        default: return state;
    }
    
}