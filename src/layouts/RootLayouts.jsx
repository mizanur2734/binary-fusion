import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RootLayouts = () => {
    return (
        <div className='poppins-regular'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayouts;