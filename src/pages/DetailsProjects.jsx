import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './../../public/Projects.json';
import { Helmet } from 'react-helmet-async';
const DetailsProjects = () => {
    const [projectDetails, setProjectDetails] = useState(null);

    const { id } = useParams();
    console.log(data);

    useEffect(() => {
        const fetchProjectDetails = async () => {
          try {
            // const response = await fetch(`../../../public/Projects.json`);
            // const data1 = await response.json();
   
            const details = data.find(project => project.projectId == id);
            setProjectDetails(details);
          } catch (error) {
            console.error('Error fetching project details:', error);
          }
        };
        fetchProjectDetails();
      }, [id]); 

      let message = null;
      if (projectDetails && projectDetails.images) {
          const images = projectDetails.images;
          const imageCount = images.length;
  
          if (imageCount === 1) {
              message = (
                <div className=''>
     <img src={images[0].imageUrl} alt={images[0].caption} className="w-full h-auto" />
                  <p className="mt-2 text-center font-bold">{images[0].caption}</p>
                </div>
             

              );
          } 
          
          
          else if (imageCount === 2) {
            message = (
<div>
<div className="mt-5 grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
            <img src={images[0].imageUrl} alt={images[0].caption} className="w-full h-96" />
            <p className="mt-2 text-center font-bold">{images[0].caption}</p>
        </div>
        </div>
<div className="mt-5 grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
            <img src={images[1].imageUrl} alt={images[1].caption} className="w-full h-96" />
            <p className="mt-2 text-center font-bold">{images[1].caption}</p>
        </div>
        </div>
</div>
                  
            );
          } 
          
else if (imageCount === 3) {
    message = (
        <div>
        <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 2).map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                <img src={image.imageUrl} alt={image.caption} className="w-full h-96" />
                <p className="mt-2 font-bold text-center">{image.caption}</p>
                </div>
                    ))}
        </div>
            <div className="mt-5 grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
            <img src={images[2].imageUrl} alt={images[2].caption} className="w-full h-96" />
            <p className="mt-2 text-center font-bold">{images[2].caption}</p>
        </div>
        </div>
        </div>
              );


          } 
          
          else if (imageCount === 5) {
            message = (
                <div>
                <div className="grid grid-cols-2 gap-4">
                    {images.slice(0, 2).map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                        <img src={image.imageUrl} alt={image.caption} className="w-full h-96" />
                        <p className="mt-2 font-bold text-center">{image.caption}</p>
                        </div>
                            ))}
                </div>
                    <div className="mt-5 grid grid-cols-6 gap-4">
                    <div className="col-start-2 col-span-4">
                    <img src={images[2].imageUrl} alt={images[2].caption} className="w-full h-96" />
                    <p className="mt-2 text-center font-bold">{images[2].caption}</p>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {images.slice(3, 5).map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                        <img src={image.imageUrl} alt={image.caption} className="w-full h-96" />
                        <p className="mt-2 font-bold text-center">{image.caption}</p>
                        </div>
                            ))}
                </div>
            
                </div>
                      );} 
                      
                      
else if (imageCount === 4) {
              message = (
                  <div className="grid grid-cols-2 gap-4">
                      {images.slice(0, 2).map((image, index) => (
                        <div>
                          <img key={index} src={image.imageUrl} alt={image.caption} className="w-full h-auto" />
                          <p className="mt-2 font-bold text-center">{image.caption}</p>
                          </div>
                          

                      ))}
                      {images.slice(2).map((image, index) => (
                        <div>
                          <img key={index + 2} src={image.imageUrl} alt={image.caption} className="w-full h-auto" />
                          <p className="mt-2 font-bold text-center">{image.caption}</p>
                          </div>
                          
                      ))}
                  </div>
              );
          }
      }

    return (
        <div className="container mx-auto px-4 py-8 text-left">
         
                  <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Description of the page" />
      </Helmet>
            {projectDetails && (
                <>
                    <h1 className="text-3xl font-bold mb-4 font-serif">PROJECT HIGHLIGHTS: {projectDetails.title}</h1>
                    <p className="text-gray-700 text-2xl mb-6 font-serif"><span className='font-bold'>Site Location: </span>{projectDetails.location}</p>
                    {message}
                    <ul className="dot2 mt-8">
                        {projectDetails.descriptionArray.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default DetailsProjects;
