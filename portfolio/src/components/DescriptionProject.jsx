import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

import styles from "./DescriptionProject.module.css";
import styles2 from "./Button.module.css";

function DescriptionProject() {
  const location = useLocation();
  const project = location.state ? location.state.projectData : null;

  //translation
  const { t, i18n } = useTranslation();

  const getDescription = () => {
    if (!project) return null;
    const lang = i18n.language;

    return project.description[lang] || project.description.en;
  };

  return (
    <div className={styles.aboutDescription}>
      <h3>{t("AboutProject")}</h3>
      {getDescription()
        ? getDescription()
            .split("\n")
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)
        : ""}
      <br />
      <br />
      <div className={styles.linkProdGithub}>
        <Link to={project.github} target="_blank" className={styles2.button}>
          <span className={styles2.textLink}>
            <AiFillGithub size={20} /> Github
          </span>
        </Link>

        {project.production ? (
          <Link
            to={project.production}
            target="_blank"
            className={styles2.button}
          >
            <span className={styles2.textLink}>
              <CgWebsite size={20} /> Production
            </span>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default DescriptionProject;
