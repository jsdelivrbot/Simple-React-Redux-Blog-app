import React from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';



// create a component
class PostsShow extends React.Component {

    
    // create a component
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }
    
    
    componentWillMount()
    {
        const {id} = this.props.match.params;
        this.setState({id});
    }

    componentDidMount()
    {this.props.fetchPost(this.state.id)}

    render() {
        let pData = this.props.post;
        pData = !pData ? "Loading post data..." : pData;

        return (
            <div>
                {pData.title}
            </div>
        );
    }
}

// ownProps is the props object that is going to the component
function bindStateToProps({posts}, ownProps)
{
    return {post: posts[ownProps.match.params.id]};
} 
export default connect(bindStateToProps, { fetchPost })(PostsShow);