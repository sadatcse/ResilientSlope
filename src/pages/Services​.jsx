import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
import AOS from 'aos';

const Services= () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    const data = [
        {
          title: "Design-Build Services of Landslide Investigation and Repair",
          start:"1",
          end:"1200",
          category_array: [
            "Investigation,Design and Repair of Failed Slopes using Recycled Plastic Pin",
            "Erosion Control of Slopes using Vetiver Grass",
            "Stabilization of Marginal/Steep Slopes using Recycled Plastic Pin or Vetiver Grass"
          ],
          image_url: "https://i.ibb.co/yF0zS81/landslide.jpg"
        },
        {
            title: "Design and Analysis",
            start:"200",
          end:"1400",
            category_array: [
              "Analysis and Design of Slopes, Embankment, Levees and Earth Retaining System using Limit Equilibrium and Finite Element Technique",
              "Value Engineering and Prepare Alternate Design",
              "Failure Investigation and Back Analysis using FEM"
            ],
            image_url: "https://i.ibb.co/G0d8vdX/analysis.png"
          },
          {
            title: "Non-Destructive and Geophysical Testing",
            start:"400",
          end:"1600",
            category_array: [
            "Electrical Resistivity Imaging",
            "Ground Penetration Radar",
            "MASW",
            "Instrumentation and Monitoring",
             "LiDAR Imaging",
            "Drone Imaging"
            ],
            image_url: "https://i.ibb.co/8KNmFzg/Testing.png"
          }
      ];

    return (
        <div>
            <Helmet>
                <title>Services | Resilient Slope LLC</title>
                <meta name="description" content="Explore our range of services offered." />
            </Helmet>
            <Title title="Services"/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mx-5 mt-5'>
                {data.map((service, index) => (
                    <div data-aos="zoom-in-up" data-aos-offset={service.start} data-aos-easing="ease-out" data-aos-duration={service.end} key={index} className="card bg-base-100 shadow-xl border border-inherit">
                        <div className="card-body">
                            <h2 className="text-sky-500 font-Georgia text-2xl card-title hover:font-serif">{service.title}</h2>
                            <ul className="space-y-2">
                                {service.category_array.map((category, i) => (
                                     <li key={i}><span className="dot"></span>{category}</li>
                                ))}
                            </ul>
                        </div>
                        <figure>
                            <img className='h-64 w-full' src={service.image_url} alt={service.title} />
                        </figure>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
