import React, { useContext, useEffect, useState } from 'react';
import PostCard from './PostCard';
import { ApiContext } from '../../Provider/ApiProvider';

const Post = () => {
   const {posts} = useContext(ApiContext)
    return (
        <div>
            {posts ? posts.map(post => <PostCard key={post._id} post={post}/>) : <p className='text-center'>Loading..</p>}
        </div>
    );
};

export default Post;