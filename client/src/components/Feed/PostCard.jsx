import React, { useContext, useState } from 'react';
import { SlOptions} from 'react-icons/sl';
import {  FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaRegShareSquare} from "react-icons/fa";
import { ApiContext } from '../../Provider/ApiProvider';

const PostCard = ({post}) => {
  const {likePost} = useContext(ApiContext)
  const {postedBy,userPhoto,caption,photoUrl,likes,_id,userId} = post;
  const [like , setLikes] = useState(likes)
  const [liked,setLiked] = useState(false)

  const handleLike = (postId,userId) => {
   likePost(postId,userId)
   setLikes([...like,likes.length])
   setLiked(!liked)
  }

  const handleUnlike = () => {
    setLikes(likes.slice(0, -1));
    setLiked(!liked)
  }
    return (
        <div className='max-w-[470px] mx-auto py-4'>
            {/* user info */}
           <div className='flex items-center justify-between'>
           <div className='flex items-center gap-2'>
             {/* user photo */}
             <img className='w-10 h-10 rou rounded-full' src={userPhoto} alt="" />
            {/* username */}
            <p className='font-semibold'>{postedBy}</p>
            {/* post date*/}
            <p className='text-gray-400'>2d.</p>
           </div>
           {/* option icon */}
           <div className='text-gray-500 cursor-pointer'>
           <div className="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
       <SlOptions/>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Edit</a></li>
        <li><a>Delete</a></li>
      </ul>
    </div>
           </div>
           </div>

           {/* Posted photo */}
          <div className='py-4'>
          <img className='w-full rounded-md' src={photoUrl} alt="" />
          </div>
          {/* like,comment and bookmark section */}
          <div className='flex justify-between cursor-pointer'>
          <div className='flex gap-6 items-center text-xl'>
           
           {liked ?   <FaHeart onClick={handleUnlike} /> : <FaRegHeart  onClick={() => handleLike(_id,userId)}/>}
            <FaRegComment/>
            <FaRegShareSquare/>
          </div>
          <div className='text-xl'>
            <FaRegBookmark/>
          </div>
          </div>
          {/* Total Likes */}
           <p className='mt-3 text-sm font-semibold text-gray-500'>{like.length}</p>
           {/* caption */}
           <p className='text-sm mt-2'><span className='font-bold text-sm'>{postedBy}</span> {caption}</p>
           {/* comments */}
           <p className='font-semibold text-gray-500 text-sm mt-3'>view all comments</p>
           <p className='text-sm mt-2'><span className='font-bold text-sm'>ronitalukder</span> joining you soon</p>
           <p className='text-sm mt-2'><span className='font-bold text-sm'>sfakbir</span> Excited to join</p>
           {/* add a new comment */}
          <div className='relative'>
          <input type="text" placeholder='Add a comment..'  className='px-2 w-full mt-4 border py-1 border-b-gray-300 focus:outline-none bg-transparent'/>
          <p className='font-semibold text-sm absolute right-2 bottom-2 cursor-pointer text-blue-400'>Post</p>
          </div>
        </div>
    );
};

export default PostCard;