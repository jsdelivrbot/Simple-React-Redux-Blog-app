import React from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';

import {Link} from 'react-router-dom';



// create a component
class PostsShow extends React.Component {

    
    // create a component
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    
    
    componentWillMount()
    {
        const {id} = this.props.match.params;
        this.setState({id});
    }

    componentDidMount()
    {
        if(!this.props.post)
            this.props.fetchPost(this.state.id);
    }

    onDeleteClick(e)
    {
        this.props.deletePost(this.state.id, 
            () => this.props.history.push('/'));
    }

    render() {
        const {post} = this.props;
        const homeButton = (<Link to="/" className="btn btn-primary">Go home</Link>);
        
        if(!post)
            return (
                <div>
                    <h2>Loading post</h2>
                    {homeButton}
                </div>
            );
        return (
            <div>
                <button 
                    onClick={this.onDeleteClick}
                    className="btn btn-danger pull-xs-right"
                >
                    Delete post #{post.id}
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>
                    {post.content}
                </p>
                {homeButton}
            </div>
        );
    }
}

// ownProps is the props object that is going to the component
function bindStateToProps({posts}, ownProps)
{
    return {post: posts[ownProps.match.params.id]};
} 
export default connect(bindStateToProps, { fetchPost, deletePost })(PostsShow);