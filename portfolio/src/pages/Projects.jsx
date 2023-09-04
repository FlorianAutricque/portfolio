import React from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Projects.module.css";
import styles2 from "../components/SizeBox.module.css";
import Box from "../components/Box";

function Projects() {
  const projects = [
    {
      projectId: 1,
      name: "WorldWise",
      mainImage: "/projectsImages/worldwise/worldwise1.png",
    },
    {
      projectId: 2,
      name: "Weather App",
      mainImage: "/projectsImages/weatherApp/weatherapp1.png",
    },
    {
      projectId: 3,
      name: "OUVA",
      mainImage: "/projectsImages/ouva/ouva1.png",
    },
    {
      projectId: 4,
      name: "Hairbnb",
      mainImage: "/projectsImages/hairbnb/airbnb1.png",
    },
    {
      projectId: 5,
      name: "The Wild Oasis",
      mainImage: "/projectsImages/wildoasis/wildoasis1.png",
    },
    {
      projectId: 6,
      name: "usePopcorn",
      mainImage: "/projectsImages/usepopcorn/usepopcorn1.png",
    },
    {
      projectId: 7,
      name: "Fast React Pizza",
      mainImage: "/projectsImages/pizzareact/pizzareact1.png",
    },
    {
      projectId: 8,
      name: "React Quizz",
      mainImage: "/projectsImages/reactquizz/quizz1.png",
    },
    {
      projectId: 9,
      name: "Far Away",
      mainImage: "/projectsImages/faraway/faraway1.png",
    },
    {
      projectId: 10,
      name: "Bankist",
      mainImage: "/projectsImages/bankist/bankist1.png",
    },
    {
      projectId: 11,
      name: "Forkify",
      mainImage: "/projectsImages/forkify/forkify1.png",
    },
    {
      projectId: 12,
      name: "Mapty",
      mainImage: "/projectsImages/mapty/mapty1.png",
    },
    {
      projectId: 13,
      name: "Guess My Number",
      mainImage: "/projectsImages/number/number1.png",
    },
    {
      projectId: 14,
      name: "Pig Game",
      mainImage: "/projectsImages/piggame/game1.png",
    },
  ];

  return (
    <div>
      <PageNav />

      <h1>List of projects</h1>

      <div className={styles.containerProjects}>
        {projects.map(project => (
          <NavLink
            key={project.projectId}
            to={`/project/${project.projectId}`}
            state={{ projectData: project }}
          >
            <div>
              <Box size1={styles2.sizeProject}>
                {project.name}
                {project.mainImage && (
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    className={styles.img}
                  />
                )}
              </Box>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Projects;
