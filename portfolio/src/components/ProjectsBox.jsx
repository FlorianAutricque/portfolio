import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./ProjectsBox.module.css";

import styles3 from "./PageNav.module.css";

import projects from "../data/data";
import Filter from "./Filter";

import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

function ProjectsBox() {
  const { t } = useTranslation();

  //FILTER
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter(project => project.stack.includes(selectedFilter));

  //SCROLL
  function handleNavLinkClick() {
    window.scrollTo(0, 0);
  }

  //Animation

  useEffect(() => {
    const elementToObserve = [
      ...document.querySelectorAll(`.${styles.containerEachProject}`),
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallBack = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }, index * 200);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallBack, options);

    elementToObserve.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Filter
        filterField="stack"
        options={[
          { value: "All", label: t("filterStack") },
          { value: "React", label: "React", icon: <FaReact /> },
          {
            value: "Javascript",
            label: "Javascript",
            icon: <BiLogoJavascript />,
          },
          {
            value: "NextJS",
            label: "NextJS",
            icon: <TbBrandNextjs />,
          },
          { value: "Ruby on rails", label: "Ruby", icon: <DiRuby /> },
        ]}
        onSelectFilter={setSelectedFilter}
      />

      <div className={styles.containerProjects}>
        {filteredProjects.map(project => (
          <NavLink
            key={project.projectId}
            to={`/project/${project.projectId}`}
            state={{ projectData: project }}
            className={({ isActive }) => (isActive ? styles3.active : "")}
            onClick={handleNavLinkClick}
          >
            <div className={styles.containerEachProject}>
              <div className={`${styles.boxFunFact} ${styles.sizeProject}`}>
                <div className={`${styles.boxOutside}`}>
                  {project.name}
                  {project.mainImage && (
                    <img
                      src={project.mainImage}
                      alt={project.name}
                      className={styles.img}
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default ProjectsBox;
