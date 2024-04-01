import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
const RecycledPlasticPin= () => {
    return (
        <div>
 <Helmet>
    <title>Recycled Plastic Pin | Resilient Slope LLC</title>
    <meta name="description" content="Recycled Plastic Pin is an environmentally friendly alternative to traditional metal pins." />
</Helmet>
             <Title title="Recycled Plastic Pin"/>
             <div class="mx-1 mt-2 sm:mx-9 sm:mt-9 bg-slate-500">
    <h1>Test</h1>
</div>
        </div>
    );
};

export default RecycledPlasticPin;