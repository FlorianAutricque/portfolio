import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles2 from "../components/Button.module.css";
import styles from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";

function Project() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  return (
    <>
      <PageNav />
      <div>
        <h1>{project ? project.name : ""}</h1>

        <div className={styles.containerTextStack}>
          <p>Stack: {project.stack.join(", ")}</p>

          <div>
            <h3>About: </h3>
            <p>{project ? project.description : ""}</p>
          </div>
        </div>
        <Link to={project.github} target="_blank" className={styles2.button}>
          <span className={styles2.textLink}>
            <AiFillGithub size={20} /> Github
          </span>
        </Link>

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
                        className={styles.image}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            )
          : ""}
      </div>

      <Link to="/projects" className={styles2.button}>
        &larr; Go back
      </Link>
    </>
  );
}

export default Project;
