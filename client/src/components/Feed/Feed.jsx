import React from 'react';
import Story from '../StoryCarosel/Story';
import Post from './Post';

const Feed = () => {
    return (
        <div>
            <Story/>
            {/* ALL the post */}
            <Post/>
        </div>
    );
};

export default Feed;