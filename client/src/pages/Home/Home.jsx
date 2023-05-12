import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Rightbar from '../../components/RightBar/Rightbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-10 bg-[#f8f8f8]'>
            {/* Sidebar */}
            <Sidebar/>
            {/* Feed */}
            {/* <Feed/> */}
            <div className='col-span-5 h-screen overflow-scroll scrollbar-hide px-4'>
            <Outlet/>
            </div>
         
            {/* Rightbar */}
            <Rightbar/>
        </div>
    );
};

export default Home;