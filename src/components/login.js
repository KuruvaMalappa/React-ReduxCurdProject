/**
 * Created by malappa on 12/23/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class Login extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    displayPosts(){
        return this.props.posts.map((post) => {
            return(
                    <li className="list-group-item" key={post.id}>
                        <Link to={"posts/" +post.id}>
                            <strong>{post.title}</strong>
                            <span className="float-right">{post.categories}</span>
                        </Link>
                    </li>
                );
        })
    }

    render() {
        return (
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <Link to="/posts/new" className="btn btn-primary">
                    Login
                </Link>
                <div>
                    <h2> Posts </h2>
                    <ul className="list-group">
                        {this.displayPosts()}
                    </ul>
                </div>

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, { fetchPosts })(Login);