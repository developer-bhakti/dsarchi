// import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

import ProjectCard from "../Components/ProjectCard";

// import React from 'react'

const Projects = () => {
  return (
    <div className="py-32 text-center">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

