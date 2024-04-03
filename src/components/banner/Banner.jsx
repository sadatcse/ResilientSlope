import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Banner = () => {

  const imageUrl ="https://i.ibb.co/WvFQ3Vh/banner2.jpg";

    useEffect(() => {
        AOS.init();
    }, []);

    const bannerStyle = {
        backgroundImage: `url(${imageUrl})`,

    };

    return (
        <div data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1200" className="rounded-lg hero min-h-screen" style={bannerStyle}>
              <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="text-center  hero-overlay bg-opacity-40 p-8 rounded-md">
      <h1 className="mb-5 text-5xl font-bold">Resilient Slope</h1>
      <p className="mb-5 text-3xl">SUSTAINABLE AND CLIMATE RESILIENT SLOPE STABILIZATION</p>
    </div>
  </div>
        </div>
    );
};

export default Banner;