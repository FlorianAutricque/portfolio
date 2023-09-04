import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "../components/Button.module.css";
import styles2 from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";

function Project() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  return (
    <>
      <PageNav />
      <div>
        <h1>{project ? project.name : ""}</h1>
        <p>Project description: {project ? project.description : ""}</p>
        <Link to={project.github} target="_blank" className={styles.button}>
          <AiFillGithub size={20} /> Github
        </Link>

        <p>Stack: {project.stack.join(", ")}</p>

        {/* {project
          ? project.mainImage && (
              <p>
                Project image:
                <img src={project.mainImage} alt={project.name} />
              </p>
            )
          : ""} */}
        {project
          ? project.allImages && (
              <div>
                <p>Project images:</p>
                {project.allImages.map((image, index) => {
                  if (index < project.allImages.length) {
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.name} ${index + 1}`}
                        className={styles2.image}
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
        &larr; Go back
      </Link>
    </>
  );
}

export default Project;
