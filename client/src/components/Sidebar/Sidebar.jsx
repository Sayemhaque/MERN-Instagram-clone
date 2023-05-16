import React, { useContext } from 'react';
import { FaAirbnb, FaCompass, FaFileVideo, FaHeart, FaHome, FaMap, FaPlusSquare, FaRegCompass, FaRegFileVideo, FaRegHeart, FaRegPlusSquare, FaSearch } from "react-icons/fa";
import CreatePostModal from '../CreatePostModal/CreatePostModal';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const navItem = [
        { text: "Home", icon: <FaHome /> },
        { text: "Search", icon: <FaSearch /> },
        { text: "Explore", icon: <FaRegCompass /> },
        { text: "Reels", icon: <FaRegFileVideo /> },
        { text: "Notifications", icon: <FaRegHeart /> },
    ]

    const handeLogOut = () => {
        logOut()
        .then(() => {
            navigate("/login")
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='col-span-2  h-screen border p-12'>
            <nav>
                {/* Logo */}
                <div>
                    <img className='h-[50px] w-[200px] object-cover' src="https://image.similarpng.com/thumbnail/2020/06/Instagram-name-logo-clipart-PNG.png" alt="" />
                </div>
                {/* Links */}
                <ul className='space-y-12 mt-12'>
                    {navItem.map(nav => <li className='flex items-center gap-3 cursor-pointer'> <span className='text-2xl'>{nav.icon}</span> {nav.text}</li>)}
                    <label htmlFor="my-modal-3" className='flex items-center gap-3 cursor-pointer'> <span className='text-2xl'><FaRegPlusSquare /></span>Create</label>
                    <li className='flex items-center gap-5'><img src={user?.photoURL} className='w-12 h-12 rounded-full cursor-pointer' alt="" />
                     <p className='font-semibold text-blue-500 cursor-pointer' onClick={handeLogOut}>Log Out</p>
                    </li>
                </ul>
            </nav>
           <CreatePostModal/>
        </div>
    );
};

export default Sidebar;