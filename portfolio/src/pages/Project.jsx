import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles2 from "../components/Button.module.css";
import styles from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";

import CarouselComponent from "../components/CarouselComponent";

function Project() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  return (
    <>
      <PageNav />
      <div>
        <h1>{project ? project.name : ""}</h1>

        <div className={styles.containerImgText}>
          <div className={styles.stackGithub}>
            <p>
              <strong>Stack used:</strong> {project.stack.slice(1).join(", ")}
            </p>
            <Link
              to={project.github}
              target="_blank"
              className={styles2.button}
            >
              <span className={styles2.textLink}>
                <AiFillGithub size={20} /> Github
              </span>
            </Link>
          </div>

          <div className={styles.aboutDescription}>
            <h3>About: </h3>
            <p>{project ? project.description : ""}</p>
          </div>
        </div>

        <CarouselComponent />
      </div>

      <div className={styles.goBack}>
        <Link to="/projects" className={styles2.button}>
          &larr; Go back
        </Link>
      </div>
    </>
  );
}

export default Project;
