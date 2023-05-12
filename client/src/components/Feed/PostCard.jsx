import React from 'react';
import { SlOptions} from 'react-icons/sl';
import {  FaRegBookmark, FaRegComment, FaRegHeart, FaRegShareSquare} from "react-icons/fa";

const PostCard = () => {
    return (
        <div className='max-w-[470px] mx-auto py-4'>
            {/* user info */}
           <div className='flex items-center justify-between'>
           <div className='flex items-center gap-2'>
             {/* user photo */}
             <img className='w-10 h-10 rou rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BOc0hLwVGruCgj9shJMHZoXuijheJa_mxfKJ2deNTJwLMSIrKsVGvI33Qfld2T2lxfk&usqp=CAU" alt="" />
            {/* username */}
            <p className='font-semibold'>sayemhaque</p>
            {/* post date*/}
            <p className='text-gray-400'>2d.</p>
           </div>
           {/* option icon */}
           <div className='text-gray-500 cursor-pointer'>
            <SlOptions/>
           </div>
           </div>

           {/* Posted photo */}
          <div className='py-4'>
          <img className='w-full rounded-md' src="https://images.unsplash.com/photo-1683527272896-3e05e4503085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" />
          </div>
          {/* like,comment and bookmark section */}
          <div className='flex justify-between cursor-pointer'>
          <div className='flex gap-6 items-center text-xl'>
            <FaRegHeart/>
            <FaRegComment/>
            <FaRegShareSquare/>
          </div>
          <div className='text-xl'>
            <FaRegBookmark/>
          </div>
          </div>
          {/* Total Likes */}
           <p className='mt-3 text-sm font-semibold text-gray-500'>203 likes</p>
           {/* caption */}
           <p className='text-sm mt-2'><span className='font-bold text-sm'>sayemhaque</span> Outing going on.Come join me guys.</p>
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