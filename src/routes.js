/**
 * Created by malappa on 12/22/2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import  App from './components/app';
import Login from './components/login'
import PostsNew from './components/post_new';
import PostsShow from './components/posts_show';

const about = () => {
    return <div> Hi About </div>
}

export default(
    <Route path="/" component={App} >
        <IndexRoute component = {Login} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);


