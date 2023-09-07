import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

import styles2 from "../components/Button.module.css";
import styles from "./Project.module.css";

import PageNav from "../components/PageNav";
import StackProject from "../components/StackProject";
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
            <StackProject />
          </div>

          <div className={styles.aboutDescription}>
            <h3>About </h3>
            {project
              ? project.description
                  .split("\n")
                  .map((paragraph, index) => <p key={index}>{paragraph}</p>)
              : ""}{" "}
            <br />
            <br />
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
