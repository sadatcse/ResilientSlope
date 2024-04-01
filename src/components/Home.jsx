
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './banner/Banner';
const Home = () => {
    return (
        <div>
<Helmet><title>Home | Resilient Slope LLC</title>
<meta name="description" content="Sustainable And Climate Resilient Slope Stabilization." />
</Helmet>
<div className='m-5'>
<Banner></Banner>
</div>
            
        </div>
    );
};

export default Home;