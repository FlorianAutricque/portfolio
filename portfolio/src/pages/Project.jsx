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
        <p>Project description: {project ? project.descritpion : ""}</p>

        {project
          ? project.mainImage && (
              <p>
                Project image:
                <img src={project.mainImage} alt={project.name} />
              </p>
            )
          : ""}

        {project
          ? project.allImages && (
              <div>
                <p>Project images:</p>
                {project.allImages.map((image, index) => {
                  if (index < project.allImages.length - 2) {
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.name} ${index + 1}`}
                      />
                    );
                  }
                  return null;
                })}
              </div>
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
