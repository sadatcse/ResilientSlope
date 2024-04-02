import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const RecycledPlasticPin = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS when component mounts
    }, []);
    return (
        <div>
            <Helmet>
                <title>Recycled Plastic Pin | Resilient Slope LLC</title>
                <meta name="description" content="Recycled Plastic Pin is an environmentally friendly alternative to traditional metal pins." />
            </Helmet>
            <Title title="Recycled Plastic Pin" />
            <div className="mx-1 mt-2 sm:mx-9 sm:mt-9 ">
                <div className="flex flex-wrap w-11/12">

                    <div data-aos="slide-left" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1200" className="w-full sm:w-1/2 p-4">
                        <div className="mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-bold text-sky-500 mb-4">What is Recycled Plastic Pin?</h2>
                            <ul className='dot2'>
                                <li className=" mb-3 ml-5">Recycled Plastic Pin (RPP) is made from Recycled Plastic Waste, and it is a highly cost-effective solution.</li>
                                <li className=" mb-3 ml-5">It is a commercially available materials from multiple vendors all over USA.</li>
                                <li className=" mb-3 ml-5">A Single 4”x4” and 10 ft. long RPP replace more than 500 plastic water bottles.</li>
                                <li className=" mb-3 ml-5">Using RPP in Slope Repair have significant environmental benefits as it create a market for recycled plastics and reduces the waste plastic volume from the landfill.</li>
                                <li className=" mb-3 ml-5">RPP doesn’t degrade when installed into to the ground and require no maintenance.</li>
                            </ul>
          
                        </div>
                        <div className="video-container my-5">
      <iframe
        title="UTA researcher uses recycled plastic to strengthen highways"
        src="https://www.youtube.com/embed/c0DResP-F4I"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
                        <div className="mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-bold text-sky-500 mb-4">Advantages of Slope Repair Using Recycled Plastic Pin </h2>
                            <ul className='dot2'>
                                <li className=" mb-3 ml-5">Resilient Slopes Founders established the design and construction protocols through extensive Academic Research. It has a robust design technics based on field performance data.</li>
                                <li className=" mb-3 ml-5">Sustainable Solutions to repair Shallow Slope failure.</li>
                                <li className=" mb-3 ml-5">It allows using the in-situ soils to repair the slopes and requires minimal earthwork.</li>
                                <li className=" mb-3 ml-5">It cut down the repair cost from 50 to 70% comparing traditional repair methods.</li>
                                <li className=" mb-3 ml-5">A single RPP can be installed in less than 5 minutes. An Entire slope can be repaired less than a week.</li>
                            </ul>
          
                        </div>
                    </div>

                    <div data-aos="slide-up" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="1600" className="w-full sm:w-1/2 p-4">
                    <div className="video-container my-5 ms-5">
      <iframe
        title="Recycled Plastic Pin Installation with Steel Pin"
        src="https://www.youtube.com/embed/scV9IhyY6FM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl font-semibold text-sky-500	 mb-4"><span className='font-bold'>RESILIENT SLOPE</span> Services</h2>
                            <ul className='dot2'>
                                <li className=" mb-3 ml-5"><span className='font-bold'>Resilient Slope</span> offers a complete end to end service as required by the client. <span className='font-bold'>Resilient Slope</span> offers Site Investigation, Failure Analysis, Design of the Slope Repair and Installation of the Recycled Plastic Pins. </li>
                                <li className=" mb-3 ml-5"><span className='font-bold'>Resilient Slope</span> utilizes LiDAR and Drone Imaging to create the surface profile and use Electrical Resistivity Imaging Results to  identify the soil condition, water table as well as the depth of failure of the slopes.</li>
                                <li className=" mb-3 ml-5"><span className='font-bold'>Resilient Slope</span> use the Advanced site investigation results to do the failure analysis of the slopes and do the optimized repair design using Recycled Plastic Pin. Swashbuckling install the pins with the trusted sub-contractors.</li>

                            </ul>
          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecycledPlasticPin;
