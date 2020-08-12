import React from 'react';
import AllPosts from './AllPosts';
import Feeds from './Feeds';
import Notifications from './Notifications';
import NewPost from '../Posts/NewPost';

const Home = () => {
    return (
        <div>
            <AllPosts/>
            <Feeds/>
            <Notifications/>
            <NewPost/>

        </div>
    );
}

export default Home;
