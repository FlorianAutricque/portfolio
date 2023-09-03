// import { Link, useParams } from "react-router-dom";
// import PageNav from "../components/PageNav";
// import styles from "../components/Button.module.css";

// function Project() {
//   const { projectId } = useParams();

//   const projects = {
//     1: {
//       projectId: 1,
//       name: "coucou",
//     },
//     2: {
//       projectId: 2,
//       name: "caca",
//     },
//   };

//   const project = projects[projectId];

//   return (
//     <>
//       <PageNav />
//       <div>
//         <h1>Project Details</h1>
//         <p>Project ID: {project.projectId}</p>
//         <p>Project Name: {project.name}</p>
//       </div>

//       <Link to="/projects" className={styles.button}>
//         Go back
//       </Link>
//     </>
//   );
// }

// export default Project;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "../components/Button.module.css";

function Project() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  return (
    <>
      <PageNav />
      <div>
        <h1>Project Details</h1>
        <p>Project ID: {project ? project.projectId : ""}</p>
        <p>Project Name: {project ? project.name : ""}</p>

        {project
          ? project.mainImage && (
              <p>
                Project image:
                <img src={project.mainImage} alt={project.name} />
              </p>
            )
          : ""}
      </div>

      <Link to="/projects" className={styles.button}>
        Go back
      </Link>
    </>
  );
}

export default Project;
