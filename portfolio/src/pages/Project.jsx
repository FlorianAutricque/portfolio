import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageNav from "../components/PageNav";
import { AiFillGithub } from "react-icons/ai";

import CarouselComponent from "../components/CarouselComponent";
import LanguagesBox from "../components/LanguagesBox";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRubyonrails, SiTailwindcss, SiStimulus } from "react-icons/si";

import styles2 from "../components/Button.module.css";
import styles from "./Project.module.css";
import styles3 from "./Languages.module.css";

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
            {/* <strong>Stack used:</strong> {project.stack.slice(1).join(", ")} */}
            <strong>Stack used:</strong>{" "}
            {project.stack.slice(1).map((x, index) => (
              <div key={index}>
                {x === "CSS" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<BiLogoCss3 size={80} />}>
                      CSS
                    </LanguagesBox>
                  </div>
                ) : x === "HTML" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<AiFillHtml5 size={80} />}>
                      HTML
                    </LanguagesBox>
                  </div>
                ) : x === "React" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<FaReact size={80} />}>
                      React
                    </LanguagesBox>
                  </div>
                ) : x === "Javascript" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<BiLogoJavascript size={80} />}>
                      Javascript
                    </LanguagesBox>
                  </div>
                ) : x === "Stimulus" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<SiStimulus size={80} />}>
                      Stimulus
                    </LanguagesBox>
                  </div>
                ) : x === "Ruby on rails" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<SiRubyonrails size={80} />}>
                      Rails
                    </LanguagesBox>
                  </div>
                ) : x === "Bootstrap" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<FaBootstrap size={80} />}>
                      Bootstrap
                    </LanguagesBox>
                  </div>
                ) : x === "Tailwind" ? (
                  <div className={styles3.containerEachBox}>
                    <LanguagesBox icon={<SiTailwindcss size={80} />}>
                      Tailwindcss
                    </LanguagesBox>
                  </div>
                ) : null}
              </div>
            ))}
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

            {project
              ? project.description
                  .split("\n")
                  .map((paragraph, index) => <p key={index}>{paragraph}</p>)
              : ""}
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
