import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRubyonrails, SiTailwindcss, SiStimulus } from "react-icons/si";
import { PiFileJsxDuotone } from "react-icons/pi";
import { RiSupabaseFill } from "react-icons/ri";

import LanguagesBox from "./LanguagesBox";

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
                <LanguagesBox icon={<BiLogoCss3 size={80} />}>CSS</LanguagesBox>
              </div>
            ) : x === "HTML" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<AiFillHtml5 size={80} />}>
                  HTML
                </LanguagesBox>
              </div>
            ) : x === "React" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<FaReact size={80} />}>React</LanguagesBox>
              </div>
            ) : x === "Javascript" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<BiLogoJavascript size={80} />}>
                  Javascript
                </LanguagesBox>
              </div>
            ) : x === "Stimulus" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<SiStimulus size={80} />}>
                  Stimulus
                </LanguagesBox>
              </div>
            ) : x === "Ruby on rails" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<SiRubyonrails size={80} />}>
                  Rails
                </LanguagesBox>
              </div>
            ) : x === "Bootstrap" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<FaBootstrap size={80} />}>
                  Bootstrap
                </LanguagesBox>
              </div>
            ) : x === "Tailwind" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<SiTailwindcss size={80} />}>
                  Tailwindcss
                </LanguagesBox>
              </div>
            ) : x === "JSX" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<PiFileJsxDuotone size={80} />}>
                  JSX
                </LanguagesBox>
              </div>
            ) : x === "Supabase" ? (
              <div className={styles2.containerEachBox}>
                <LanguagesBox icon={<RiSupabaseFill size={80} />}>
                  Supabase
                </LanguagesBox>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackProject;
