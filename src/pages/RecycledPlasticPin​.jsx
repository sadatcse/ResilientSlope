import React from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';

const RecycledPlasticPin = () => {
    return (
        <div>
            <Helmet>
                <title>Recycled Plastic Pin | Resilient Slope LLC</title>
                <meta name="description" content="Recycled Plastic Pin is an environmentally friendly alternative to traditional metal pins." />
            </Helmet>
            <Title title="Recycled Plastic Pin" />
            <div className="mx-1 mt-2 sm:mx-9 sm:mt-9 ">
                <div className="flex flex-wrap w-11/12">

                    <div className="w-full sm:w-1/2 p-4">
                        <div className="mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-blue-500 mb-4">What is Recycled Plastic Pin?</h2>
                            <ul className='list-outside hover:list-inside'>
                                <li className=" mb-3 ml-5"><span className="dot"></span>Recycled Plastic Pin (RPP) is made from Recycled Plastic Waste, and it is a highly cost-effective solution.</li>
                                <li className=" mb-3 ml-5"><span className="dot"></span>It is a commercially available materials from multiple vendors all over USA.</li>
                                <li className=" mb-3 ml-5"><span className="dot"></span>A Single 4”x4” and 10 ft. long RPP replace more than 500 plastic water bottles.</li>
                                <li className=" mb-3 ml-5"><span className="dot"></span>Using RPP in Slope Repair have significant environmental benefits as it create a market for recycled plastics and reduces the waste plastic volume from the landfill.</li>
                                <li className=" mb-3 ml-5"><span className="dot"></span>RPP doesn’t degrade when installed into to the ground and require no maintenance.</li>
                            </ul>
          
                        </div>
                        <div className="my-10 aspect-w-16 aspect-h-12">
                            <iframe className="w-full h-full" src="https://www.youtube.com/embed/c0DResP-F4I" title="UTA researcher uses recycled plastic to strengthen highways" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 p-4">
                        <h1 className="text-center">Hello World</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecycledPlasticPin;
