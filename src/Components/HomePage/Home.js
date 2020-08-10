import React from 'react';
import AllPosts from './AllPosts';
import Feeds from './Feeds';
import Notifications from './Notifications';

const Home = () => {
    return (
        <div>
            <AllPosts/>
            <Feeds/>
            <Notifications/>
        </div>
    );
}

export default Home;
