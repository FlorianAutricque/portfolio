import { Link, useLocation } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";

import styles from "./DescriptionProject.module.css";
import styles2 from "./Button.module.css";

function DescriptionProject() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  return (
    <div className={styles.aboutDescription}>
      <h3>About </h3>
      {project
        ? project.description
            .split("\n")
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)
        : ""}{" "}
      <br />
      <br />
      <Link to={project.github} target="_blank" className={styles2.button}>
        <span className={styles2.textLink}>
          <AiFillGithub size={20} /> Github
        </span>
      </Link>
    </div>
  );
}

export default DescriptionProject;
