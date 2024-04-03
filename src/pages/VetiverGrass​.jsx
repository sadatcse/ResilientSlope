import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Grass from "/grass.jpg";
const VetiverGrass = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS when component mounts
    }, []);
    return (
        <div>
<Helmet>
    <title>Vetiver Grass | Resilient Slope LLC</title>
    <meta name="description" content="Vetiver grass has an extensive root system that can grow up to several meters deep." />
</Helmet>
            <Title title="Vetiver Grass" />
            <div className="flex flex-wrap w-11/12">

<div data-aos="zoom-out-left" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1200" className="w-full sm:w-1/2 p-4">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-sky-500 mb-4">What is Vetiver Grass?</h2>
        <ul className='dot2'>
            <li className=" mb-3 ml-5">Sunshine Vetiver grass is a perennial bunch grass which is a noninvasive plant.</li>
            <li className=" mb-3 ml-5">Vetiver has very high tensile root strength (2 ksi) which offers high strength in Soil.</li>
            <li className=" mb-3 ml-5">Vetiver Root can grow up to 10 to 12 ft. in the first year of plantation.</li>
            <li className=" mb-3 ml-5">Vetiver grass can grow in the region with rainfall varied from 20 inch to 200 inch of Annual Rainfall.</li>
            <li className=" mb-3 ml-5">Vetiver has been used for many application that includes Slope Stabilization and Erosion Control.</li>
        </ul>

    </div>

    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-sky-500 mb-4">Advantages of Vetiver Grass for Slope Repair </h2>
        <ul className='dot2'>
 <li className=" mb-3 ml-5">Vetiver grass root has high strength which increases the shear strength of the soil like traditional
reinforcing element such as a ground anchor.</li>

 <li className=" mb-3 ml-5">Vetiver grassroots works as a vertical drain, which draws water from the soil through evapotranspiration
and reduce and restricts the development of the perched water zone.</li>

 <li className=" mb-3 ml-5">The fibrous vetiver grassroots are distributed within the soil, which help lower the shrinkage crack
propagation, reduce the softening actions, and even lower the depth of active zone (depth of seasonal
moisture variation).</li>

 <li className=" mb-3 ml-5">The vetiver grass has no adverse effect on the environment, ensure cost-effectiveness as well as improve
the safety of the infrastructures.</li>
        </ul>

    </div>
    <div className="video-container my-5">
<iframe
title="Sadik Khan, Ph.D. on Vetiver Grass"
src="https://www.youtube.com/embed/r1DLkFjrwpw"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin"
allowfullscreen
></iframe>
</div>
</div>

<div data-aos="zoom-in-down" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1800" className="w-full sm:w-1/2 p-4">
<div className="ms-5 my-5 max-w-full">
      <img
        src={Grass} 
        alt="VetiverGrass"
        className="w-full h-auto"
      />
    </div>
<div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-sky-500	 mb-4"><span className='font-bold'>RESILIENT SLOPE</span> Services</h2>
        <ul className='dot2'>
            <li className=" mb-3 ml-5"><span className='font-bold'>Resilient Slope</span> offers a complete end to end service as required by the client. <span className='font-bold'>Resilient Slope</span> offers Site Investigation, Failure Analysis, Design of the Slope Repair and Plantation of the Vetiver Grass.  </li>
            <li className=" mb-3 ml-5"><span className='font-bold'>Resilient Slope</span> Team has extensive experience in Vetiver Plantation and Establishment of the Root System. Resilient Slope use experienced planters to Plant the Vetiver Grass. Resilient Slope </li>

            <li className=" mb-3 ml-5"><span className='font-bold'>Resilient Slope</span> use the Advanced site investigation results to do the failure analysis of the slopes and do the optimized repair design using Recycled Plastic Pin. Swashbuckling install the pins with the trusted sub-contractors.</li>

        </ul>

    </div>
</div>
</div>
            
     
        </div>
    );
};

export default VetiverGrass;