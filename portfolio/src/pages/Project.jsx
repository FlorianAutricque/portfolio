import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";

import styles from "./Project.module.css";
import styles2 from "../components/Button.module.css";

import PageNav from "../components/PageNav";
import StackProject from "../components/StackProject";
import CarouselComponent from "../components/CarouselComponent";
import DescriptionProject from "../components/DescriptionProject";

function Project() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const { t } = useTranslation();

  return (
    <>
      <PageNav />
      <div>
        <h1>{project ? project.name : ""}</h1>
        <div className={styles.containerMain}>
          <StackProject />
          <DescriptionProject />
        </div>

        <CarouselComponent />
      </div>

      <div className={styles.goBack}>
        <Link to="/projects" className={styles2.button} onClick={scrollToTop}>
          &larr; {t("buttonGoBack")}
        </Link>
      </div>
    </>
  );
}

export default Project;
