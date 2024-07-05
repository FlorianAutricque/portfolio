import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiRubyonrails, SiTailwindcss, SiStimulus } from "react-icons/si";
import { PiFileJsxDuotone } from "react-icons/pi";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongoose } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiPug } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiPostman } from "react-icons/si";

import styles from "./StackProject.module.css";

const stackMapping = {
  CSS: { icon: BiLogoCss3, label: "CSS" },
  HTML: { icon: AiFillHtml5, label: "HTML" },
  React: { icon: FaReact, label: "React" },
  NextJS: { icon: TbBrandNextjs, label: "NextJS" },
  Javascript: { icon: BiLogoJavascript, label: "Javascript" },
  Stimulus: { icon: SiStimulus, label: "Stimulus" },
  "Ruby on rails": { icon: SiRubyonrails, label: "Rails" },
  Bootstrap: { icon: FaBootstrap, label: "Bootstrap" },
  Tailwind: { icon: SiTailwindcss, label: "Tailwindcss" },
  JSX: { icon: PiFileJsxDuotone, label: "JSX" },
  Supabase: { icon: RiSupabaseFill, label: "Supabase" },
  NodeJS: { icon: FaNodeJs, label: "NodeJS" },
  Mongoose: { icon: SiMongoose, label: "Mongoose" },
  Stripe: { icon: FaCcStripe, label: "Stripe" },
  Pug: { icon: SiPug, label: "Pug" },
  MongoDB: { icon: BiLogoMongodb, label: "MongoDB" },
  Postman: { icon: SiPostman, label: "Postman" },
};

function StackProject() {
  const location = useLocation();
  const project = location.state ? location.state.projectData : null;
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <div className={styles.stackGithub}>
      <h3 className={styles.StackUsedText}>{t("stackUsed")}</h3>
      <div className={styles.StackProjectGrid}>
        {project.stack.slice(1).map((tech, index) => {
          const { icon: Icon, label } = stackMapping[tech] || {};
          return (
            Icon && (
              <div key={index} className={styles.containerEachBox}>
                <div
                  className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
                >
                  <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                    <Icon size={80} />
                    <span className={styles.text}>{label}</span>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default StackProject;
