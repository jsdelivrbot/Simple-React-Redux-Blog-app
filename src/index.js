import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    {
      /* Switch will render the first most stasific route matched.  

      if: user trys requesting /posts/new

      // this will render the /posts/new route only
      <Route path="/posts/new" component={PostsNew} />
      <Route path="/" component={PostsIndex} />
      // while this will render the index route
      <Route path="/" component={PostsIndex} />
      <Route path="/posts/new" component={PostsNew} />
    */}
      <Switch> 
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
