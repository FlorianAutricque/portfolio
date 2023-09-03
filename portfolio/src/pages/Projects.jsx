// import { NavLink } from "react-router-dom";
// import PageNav from "../components/PageNav";

// function Projects() {
//   return (
//     <div>
//       <PageNav />

//       <NavLink to="/project/:projectId">Project 1</NavLink>
//       <NavLink to="/project/2">Project 2</NavLink>
//     </div>
//   );
// }

// export default Projects;

import React from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

function Projects() {
  const projects = [
    {
      projectId: 1,
      name: "Project 1",
      mainImage: "/projectsImages/worldwide/worldwide1.png",
    },
    {
      projectId: 2,
      name: "Project 2",
      mainImage: "/projectsImages/weatherApp/weatherapp1.png",
    },
  ];

  return (
    <div>
      <PageNav />

      {projects.map(project => (
        <NavLink
          key={project.projectId}
          to={`/project/${project.projectId}`}
          state={{ projectData: project }}
        >
          {project.name}
          {project.mainImage && (
            <img src={project.mainImage} alt={project.name} />
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default Projects;
