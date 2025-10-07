import React, { useEffect, useState } from 'react';
import Loading from './Loading';
const Banner = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 1000); 
  }, []);
    if(loading){
        return <Loading  />
    }
    return (
        <div>
            <h3>This is banner</h3>
        </div>
    );
};

export default Banner;