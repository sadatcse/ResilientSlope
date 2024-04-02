import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import data from './../../public/Projects.json';
import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';

const Projects = () => {
  const navigate = useNavigate(); 

  const handleClick = (projectId) => {
    navigate(`/projects/${projectId}`); 
  };

  return (
    <div>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Description of the page" />
      </Helmet>
      <Title title="Projects"/>

      <p className="text-2xl text-center mb-8">Explore our latest projects below</p>
      <div className="flex flex-wrap justify-center">
        {data.map(project => (
          <div key={project.projectId} className="card card-compact w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img className='h-64' src={project.images[0].imageUrl} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>Location: {project.location}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => handleClick(project.projectId)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
