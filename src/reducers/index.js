import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  // key must be form: this is for redux form.
  form: reduxFormReducer
});

export default rootReducer;
