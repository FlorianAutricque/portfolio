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
      allImages: Array.from(
        { length: 11 },
        (_, index) => `/projectsImages/worldwise/worldwise${index + 1}.png`
      ),
      descritpion:
        "Introducing WorldWise: Your Ultimate Travel Companion. Experience seamless travel tracking with the WorldWise app. Explore a variety of features to elevate your adventures. Learn about our offerings, products, and pricing for your travel needs. Log in to access your dedicated account with an interactive world map to tell your travel stories. Easily log your trips on the map with personal anecdotes. Track Countries, Cherish Memories: WorldWise counts the countries you've visited. ity Exploration: Dive into cities you've visited with details like visit dates and your impression. Access destination history through a quick Wikipedia link. ",
    },
    {
      projectId: 2,
      name: "Weather App",
      mainImage: "/projectsImages/weatherApp/weatherapp1.png",
      allImages: Array.from(
        { length: 3 },
        (_, index) => `/projectsImages/weatherApp/weatherapp${index + 1}.png`
      ),
    },
    {
      projectId: 3,
      name: "OUVA",
      mainImage: "/projectsImages/ouva/ouva1.png",
      allImages: Array.from(
        { length: 5 },
        (_, index) => `/projectsImages/ouva/ouva${index + 1}.png`
      ),
    },
    {
      projectId: 4,
      name: "Hairbnb",
      mainImage: "/projectsImages/hairbnb/airbnb1.png",
      allImages: Array.from(
        { length: 8 },
        (_, index) => `/projectsImages/hairbnb/airbnb${index + 1}.png`
      ),
    },
    {
      projectId: 5,
      name: "The Wild Oasis",
      mainImage: "/projectsImages/wildoasis/wildoasis1.png",
      allImages: Array.from(
        { length: 28 },
        (_, index) => `/projectsImages/wildoasis/wildoasis${index + 1}.png`
      ),
    },
    {
      projectId: 6,
      name: "usePopcorn",
      mainImage: "/projectsImages/usepopcorn/usepopcorn1.png",
      allImages: Array.from(
        { length: 7 },
        (_, index) => `/projectsImages/usepopcorn/usepopcorn${index + 1}.png`
      ),
    },
    {
      projectId: 7,
      name: "Fast React Pizza",
      mainImage: "/projectsImages/pizzareact/pizzareact1.png",
      allImages: Array.from(
        { length: 12 },
        (_, index) => `/projectsImages/pizzareact/pizzareact${index + 1}.png`
      ),
    },
    {
      projectId: 8,
      name: "React Quizz",
      mainImage: "/projectsImages/reactquizz/quizz1.png",
      allImages: Array.from(
        { length: 7 },
        (_, index) => `/projectsImages/reactquizz/quizz${index + 1}.png`
      ),
    },
    {
      projectId: 9,
      name: "Far Away",
      mainImage: "/projectsImages/faraway/faraway1.png",
      allImages: Array.from(
        { length: 8 },
        (_, index) => `/projectsImages/faraway/faraway${index + 1}.png`
      ),
    },
    {
      projectId: 10,
      name: "Bankist",
      mainImage: "/projectsImages/bankist/bankist1.png",
      allImages: Array.from(
        { length: 9 },
        (_, index) => `/projectsImages/bankist/bankist${index + 1}.png`
      ),
    },
    {
      projectId: 11,
      name: "Forkify",
      mainImage: "/projectsImages/forkify/forkify1.png",
      allImages: Array.from(
        { length: 12 },
        (_, index) => `/projectsImages/forkify/forkify${index + 1}.png`
      ),
    },
    {
      projectId: 12,
      name: "Mapty",
      mainImage: "/projectsImages/mapty/mapty1.png",
      allImages: Array.from(
        { length: 6 },
        (_, index) => `/projectsImages/mapty/mapty${index + 1}.png`
      ),
    },
    {
      projectId: 13,
      name: "Guess My Number",
      mainImage: "/projectsImages/number/number1.png",
      allImages: Array.from(
        { length: 3 },
        (_, index) => `/projectsImages/number/number${index + 1}.png`
      ),
    },
    {
      projectId: 14,
      name: "Pig Game",
      mainImage: "/projectsImages/piggame/game1.png",
      allImages: Array.from(
        { length: 4 },
        (_, index) => `/projectsImages/piggame/game${index + 1}.png`
      ),
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
