import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

import {Link} from 'react-router-dom';

import _ from 'lodash';

// create a component
class PostsIndex extends Component {

    
    // create a component
    constructor(props) {
        super(props);
        this.state = {
    
        };
        this.renderPosts = this.renderPosts.bind(this);
    }
    
    

    componentDidMount() 
    {
        // start data loading process.
        this.props.fetchPosts();
        
    }

    renderPosts()
    {
        const {posts} = this.props;
        const builtPosts = _.map(posts, post => {
            return (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            );
        });
        if(builtPosts.length == 0) return (
            <li className="list-group-item">Loading posts...</li>
        );
        return builtPosts;
        
    }

    render() {
        return (
            <div>
                <div className="text-xs-right create-btn-wrapper">
                    <Link className="btn btn-primary" to="/posts/new">Create new post</Link>
                </div>
                <h3>Posts</h3>
                <br/>
                <ul className="list-group">{this.renderPosts()}</ul>
            </div>
        );
    }
}

/**
 * passing {fetchPosts} is identical to:
 * function mapDispatchToProps(dispatch)
 * {
 *      return bindActionCreators({fetchPosts}, dispatch);
 * }
 */

export default connect(
    (state) => {return {posts: state.posts}}, 
    { fetchPosts }
)(PostsIndex);