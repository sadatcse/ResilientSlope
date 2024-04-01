import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
const Services= () => {
    return (
        <div>
<Helmet>
    <title>Services | Resilient Slope LLC</title>
    <meta name="description" content="Explore our range of services offered." />
</Helmet>
            <Title title="Services"/>
            <div className='w-10/12'>
                <h1>Test</h1>
            </div>
        </div>
    );
};

export default Services;