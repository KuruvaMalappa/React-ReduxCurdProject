/**
 * Created by malappa on 12/24/2016.
 */

import React , { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component{
    static contextTypes = {
        router: PropTypes.object
    };
    onSubmit(props){
        createPost(props)
            .payload.then(() => {
                this.context.router.push('/');
            });
    }
    render(){
        const { handleSubmit, pristine, reset, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group">
                    <label>Title</label>
                    <div>
                        <Field name="title" component="input" type="text" placeholder="Title" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <div>
                        <Field name="categories" component="input" type="text" placeholder="Categories" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <div>
                        <Field name="content" component="textarea" className="form-control"/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
                    <button type="button" disabled={pristine || submitting} className="btn btn-warn" onClick={reset} >Cancel</button>
                    <Link to="/" className="btn btn-danger">GO Back</Link>
                </div>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Enter a Title";
    }
    return errors;
}

export  default reduxForm({
    form: 'postNewForm',
    fields: ['title','categories','content'],
    validate
},null,{ createPost})(PostsNew);


