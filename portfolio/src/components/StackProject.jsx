import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRubyonrails, SiTailwindcss, SiStimulus } from "react-icons/si";
import { PiFileJsxDuotone } from "react-icons/pi";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import styles from "./StackProject.module.css";
import styles2 from "../pages/Languages.module.css";

function StackProject() {
  const location = useLocation();

  const project = location.state ? location.state.projectData : null;

  const { t } = useTranslation();

  return (
    <div className={styles.stackGithub}>
      <h3 className={styles.StackUsedText}>{t("stackUsed")}</h3>

      <div className={styles.StackProjectGrid}>
        {project.stack.slice(1).map((x, index) => (
          <div key={index} className={styles.StackProject}>
            {x === "CSS" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<BiLogoCss3 size={80} />}
                    <span className={styles.text}>CSS</span>
                  </div>
                </div>
              </div>
            ) : x === "HTML" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<AiFillHtml5 size={80} />}
                    <span className={styles.text}>HTML</span>
                  </div>
                </div>
              </div>
            ) : x === "React" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<FaReact size={80} />}
                    <span className={styles.text}>React</span>
                  </div>
                </div>
              </div>
            ) : x === "NextJS" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<TbBrandNextjs size={80} />}
                    <span className={styles.text}>NextJS</span>
                  </div>
                </div>
              </div>
            ) : x === "Javascript" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<BiLogoJavascript size={80} />}
                    <span className={styles.text}>Javascript</span>
                  </div>
                </div>
              </div>
            ) : x === "Stimulus" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<SiStimulus size={80} />}
                    <span className={styles.text}>Stimulus</span>
                  </div>
                </div>
              </div>
            ) : x === "Ruby on rails" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<SiRubyonrails size={80} />}
                    <span className={styles.text}>Rails</span>
                  </div>
                </div>
              </div>
            ) : x === "Bootstrap" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<FaBootstrap size={80} />}
                    <span className={styles.text}>Bootstrap</span>
                  </div>
                </div>
              </div>
            ) : x === "Tailwind" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<SiTailwindcss size={80} />}
                    <span className={styles.text}>Tailwindcss</span>
                  </div>
                </div>
              </div>
            ) : x === "JSX" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<PiFileJsxDuotone size={80} />}
                    <span className={styles.text}>JSX</span>
                  </div>
                </div>
              </div>
            ) : x === "Supabase" ? (
              <div className={styles2.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    {<RiSupabaseFill size={80} />}
                    <span className={styles.text}>Supabase</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackProject;
