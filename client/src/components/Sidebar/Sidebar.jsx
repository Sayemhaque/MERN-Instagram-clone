import React from 'react';
import { FaAirbnb, FaCompass, FaFileVideo, FaHeart, FaHome, FaMap, FaPlusSquare, FaRegCompass, FaRegFileVideo, FaRegHeart, FaRegPlusSquare, FaSearch} from "react-icons/fa";

const Sidebar = () => {
    const navItem = [
        {text:"Home", icon:<FaHome/>},
        {text:"Search", icon:<FaSearch/>},
        {text:"Explore", icon:<FaRegCompass/>},
        {text:"Reels", icon:<FaRegFileVideo/>},
        {text:"Notifications", icon:<FaRegHeart/>},
        {text:"Create", icon:<FaRegPlusSquare/>},
    ]
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
              </ul>
           </nav>
        </div>
    );
};

export default Sidebar;