import React from 'react';
import Banner from '../components/Banner';
import OurServices from '../components/OurServices';
import OurPartners from '../components/OurPartners';

const HomePage = () => {
    return (
        <div className='poppins-regular px-4 lg:px-12'>
            <Banner/>
            <OurServices/>
            <OurPartners/>
        </div>
    );
};

export default HomePage;