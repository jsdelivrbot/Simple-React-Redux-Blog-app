import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

// create a component
class PostsNew extends Component {

    
    // create a component
    constructor(props) {
        super(props);
        this.state = {
    
        };
        this.renderField = this.renderField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    

    renderField(field)
    {
        // destructuring 
        const  { meta: { touched, error } } = field;
        const wrapperClassName = 
        `form-group ${error && touched ? 'has-danger' : ''}`;

        return ( // error is put forth via the validator.
            <div className={wrapperClassName}>
            {/* 
                What meta.touched means is the user has assumed focus of 
                the given field and transfer focus. 

                this is useful when you dont want form format errors to 
                appear when user hasn't even typed anything for first time.
            */}
                <label>{field.label}</label>
                {/* flatten the event handler array to bind to input */}
                <input 
                    className="form-control"
                    type="text"
                    {...field.input} 
                />
                <div className="text-help">
                    {error && touched ? `${error}` : ""}
                </div>
            </div>
        );
    }
    // when user wants to submit the form: NOTE: 
    // form is already valid at this point
    onSubmit(values)
    {
        this.props.createPost(values, () => {
            // redirect user. this is react-router
            this.props.history.push('/');
        });
        
        
    }

    render() {
        // handle submit is a new prop that redux form add's to this component.
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field // Field is like a wrapper, while component is the view of the field.
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field // Field is like a wrapper, while component is the view of the field.
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field // Field is like a wrapper, while component is the view of the field.
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Post</button>
                <Link style={{marginLeft: "10px"}} className="btn btn-danger" to="/">Cancel</Link>
            </form>
        );
    }
}

/**
 * 
 * If i return a empty object redux-forms assumes there is nothing wrong
 * and its validated.
 * NOTE: if a input is empty the values object will not contain a property with the given key.
 */
function validate(values)
{
    const errors = {};
    //validate the inputs

    // if title is undefined: remember that values will not contain
    // title if the title field doesnt have a value.
    if(!values.title)
        errors.title = "Field Invalid.";
    if(!values.catagories)
        errors.catagories = "Field Invalid.";
    if(!values.content)
        errors.content = "Field Invalid.";

    // if errors = {} the form is fine to submit.
    // if "errors" has *any* properties redux-forms will not submit.
    return errors;
}

export default reduxForm({
    validate,
    // name of form, sort of a namespace for all state in this form.
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);