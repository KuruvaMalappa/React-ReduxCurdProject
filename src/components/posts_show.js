/**
 * Created by malappa on 12/25/2016.
 */
import React, { Component, PropTypes } from 'React';
import { connect }  from   'react-redux';
import { fetchPost, deletePost } from   '../actions/index';
import { Link } from 'react-router';

class PostsShow  extends  Component{
    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }
    static contextTypes = {
        router: PropTypes.object
    };
    onDeleteClick(){
        deletePost(this.props.params.id)
            .payload.then((post) => {
                this.context.router.push('/');
            });
    }
    render(){
        const { post } = this.props;
        if(!post){
            return <div>Loading...  </div>;
        }
        return(
            <div>
                <div>
                    <Link to="/"> Back To HomePage  </Link>
                    <button className="btn btn-danger float-right"
                        onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                </div>
                <h2>{post.title}</h2>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        post: state.posts.post
    }
}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostsShow);
