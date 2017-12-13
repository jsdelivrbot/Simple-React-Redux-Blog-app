import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

// create a component
class PostsNew extends Component {
    render() {
        return (
            <div>
                Posts new.
            </div>
        );
    }
}

export default connect(null, { createPost } )(PostsNew);