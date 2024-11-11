import React from 'react'
import proj1 from '../assets/donut1.png'
import proj2 from '../assets/websiteportfolio.png'
import proj3 from '../assets/project1.png'
import proj4 from '../assets/Cash.png'
import proj5 from '../assets/inv.png'
import './Projects.css'

function Projects() {

  const projects = [
  {
    title: 'POS (Point of Sale) Inventory Management System',
    description: 'This system is created inorder improve the production and management of the store. It was created using Java.',
    image: proj1,  // Using imported image
    link: 'https://project-one.com',
  },
  {
    title: 'Website Portfolio',
    description: 'This was my personal website portfolio.It was created using React,Javascript,HTML and CSS',
    image: proj2,  // Using imported image
    link: 'https://project-two.com',
  },
  {
    title: 'POS (Point of Sale) Management System',
    description: 'Another POS System that my co-students create to have better management to the store.It was created using Java.',
    image: proj3,  // Using imported image
    link: 'https://project-two.com',
  },
  {
    title: 'POS (Point of Sale) Management System',
    description: 'This is a system made to be able to help the user increase the calculations of the order.This one is created using Python.',
    image: proj4,  // Using imported image
    link: 'https://project-two.com',
  },
  {
    title: 'Inventory System',
    description: 'This is Inventory System that manages the appliances of the user. It was created using Java. ',
    image: proj5,  // Using imported image
    link: 'https://project-two.com',
  },
  ];
return (
  <section className="projects body bg-primary-color2 "id="projects">
  <h2 className="projects-heading">My Projects</h2>
  <div className="projects-list">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info project-card-description ">
          <h3 className="project-title project-card-description ">{project.title}</h3>
          <p className="project-description project-card-description ">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
);
}
export default Projects;