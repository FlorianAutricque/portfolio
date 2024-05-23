import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";

import styles from "./Project.module.css";
import styles2 from "../components/Button.module.css";

import PageNav from "../components/PageNav";
import StackProject from "../components/StackProject";
import CarouselComponent from "../components/CarouselComponent";
import DescriptionProject from "../components/DescriptionProject";

function Project() {
  const { t } = useTranslation();
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  //animation

  // useEffect(() => {
  //   const elementToObserver = [
  //     document.querySelector(`.${styles.containerDescriptionProject}`),
  //     document.querySelector(`.${styles.containerCarouselComponent}`),
  //   ];

  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  //   const observerCallBack = (entries, observer) => {
  //     entries.forEach((entry, index) => {
  //       if (entry.isIntersecting) {
  //         setTimeout(() => {
  //           entry.target.classList.add(styles.show);
  //           observer.unobserve(entry.target);
  //         }, index * 200);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(observerCallBack, options);

  //   elementToObserver.forEach(el => {
  //     if (el) observer.observe(el);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      <PageNav />
      <div>
        <h1>{project ? project.name : ""}</h1>
        <div className={styles.containerMain}>
          <StackProject />
          {/* <div className={styles.containerDescriptionProject}> */}
          <DescriptionProject />
          {/* </div> */}
        </div>

        {/* <div className={styles.containerCarouselComponent}> */}
        <CarouselComponent />
        {/* </div> */}

        <div className={styles.goBack}>
          <Link to="/projects" className={styles2.button} onClick={scrollToTop}>
            {t("buttonGoBack")}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Project;
