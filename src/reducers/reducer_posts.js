import {FETCH_POSTS} from '../actions';

// so basiclly you default the state in params and default it to the datatype your gonna use it for
export default function (state = {}, action)
{
    switch(action.type)
    {
        case FETCH_POSTS:
            console.log(action.payload.data);
        break;
        default: return state;
    }
    
}