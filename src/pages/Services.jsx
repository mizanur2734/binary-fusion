import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const Services = () => {
     const [loading, setLoading] = useState(true);
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }, []);
      if (loading) {
        return <Loading />;
      }
    return (
        <div>
            
        </div>
    );
};

export default Services;