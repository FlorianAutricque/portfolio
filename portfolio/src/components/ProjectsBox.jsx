import { NavLink } from "react-router-dom";
import { useState } from "react";

import styles from "./ProjectsBox.module.css";
import styles2 from "./SizeBox.module.css";
import styles3 from "./PageNav.module.css";

import Box from "./Box";
import projects from "../data/data";
import Filter from "./Filter";

import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { useTranslation } from "react-i18next";

function ProjectsBox() {
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

  const { t } = useTranslation();

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
            <div>
              <Box size1={styles2.sizeProject}>
                {project.name}
                {project.mainImage && (
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    className={styles.img}
                    loading="lazy"
                  />
                )}
              </Box>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default ProjectsBox;
