import { useTranslation } from "react-i18next";

import PageNav from "../components/PageNav";

import ButtonScrollTop from "../components/ButtonScrollTop.jsx";

import styles from "./Languages.module.css";

import { FaReact, FaBootstrap } from "react-icons/fa6";
import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoMongodb,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { DiHeroku, DiRuby, DiSass } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiMysql,
  SiRubyonrails,
  SiSqlite,
  SiWebpack,
  SiTailwindcss,
  SiStyledcomponents,
  SiStimulus,
} from "react-icons/si";
import { PiFileJsxDuotone } from "react-icons/pi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import { useEffect } from "react";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongoose } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiPug } from "react-icons/si";

function Languages() {
  const { t } = useTranslation();

  const languages = [
    {
      icon: <BiLogoJavascript size={80} />,
      text: "Javascript",
    },
    {
      icon: <AiFillHtml5 size={80} />,
      text: "HTML",
    },
    {
      icon: <BiLogoCss3 size={80} />,
      text: "CSS",
    },
    {
      icon: <DiSass size={80} />,
      text: "Sass",
    },
    {
      icon: <DiRuby size={80} />,
      text: "Ruby",
    },
  ];

  const frameworks = [
    {
      icon: <TbBrandNextjs size={80} />,
      text: "NextJS",
    },
    {
      icon: <SiTailwindcss size={80} />,
      text: "Tailwindcss",
    },
    {
      icon: <FaBootstrap size={80} />,
      text: "Bootstrap",
    },
    {
      icon: <SiStimulus size={80} />,
      text: "Stimulus",
    },
    {
      icon: <SiRubyonrails size={80} />,
      text: "Rails",
    },
    {
      icon: <SiVuedotjs size={80} />,
      text: "Vue",
    },
    {
      icon: <SiNuxtdotjs size={80} />,
      text: "Nuxt",
    },
  ];

  const librairies = [
    {
      icon: <FaReact size={80} />,
      text: "React",
    },
    {
      icon: <SiStyledcomponents size={80} />,
      text: "Styled Comp.",
    },
  ];

  const others = [
    {
      icon: <FaNodeJs size={80} />,
      text: "NodeJS",
    },
    {
      icon: <SiPug size={80} />,
      text: "Pug",
    },
    {
      icon: <SiVite size={80} />,
      text: "Vite",
    },
    {
      icon: <PiFileJsxDuotone size={80} />,
      text: "JSX",
    },
    {
      icon: <SiMysql size={80} />,
      text: "MySQL",
    },
    {
      icon: <BiLogoPostgresql size={80} />,
      text: "SQL",
    },
    {
      icon: <SiSqlite size={80} />,
      text: "SQLite",
    },
    {
      icon: <BiLogoFigma size={80} />,
      text: "Figma",
    },
    {
      icon: <BsGit size={80} />,
      text: "Git",
    },
    {
      icon: <DiHeroku size={80} />,
      text: "Heroku",
    },
    {
      icon: <BiLogoMongodb size={80} />,
      text: "MongoDB",
    },
    {
      icon: <SiMongoose size={80} />,
      text: "Mongoose",
    },
    {
      icon: <SiWebpack size={80} />,
      text: "Webpack",
    },
    {
      icon: <RiSupabaseFill size={80} />,
      text: "Supabase",
    },
    {
      icon: <FaCcStripe size={80} />,
      text: "Stripe",
    },
  ];

  useEffect(() => {
    const elementsToObserve = [
      document.querySelector(`.${styles.containerLanguages}`),
      document.querySelector(`.${styles.containerFrameworks}`),
      document.querySelector(`.${styles.containerLibrairies}`),
      document.querySelector(`.${styles.containerOthers}`),

      document.querySelector(`.${styles.titleLanguages2}`),
      document.querySelector(`.${styles.titleLanguages3}`),
      document.querySelector(`.${styles.titleLanguages4}`),
      ...document.querySelectorAll(`.${styles.boxFunFact}`),
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.show);
            observer.unobserve(entry.target);
          }, index * 200);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    elementsToObserve.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <PageNav />

      <h1>{t("LanguagesTitle")}</h1>

      <div className={styles.container}>
        {/* languages */}

        <div className={styles.containerLanguages}>
          <div>
            <p className={styles.titleLanguages1}>
              &gt; {t("languages.lang").toUpperCase()}{" "}
            </p>
          </div>

          <div className={styles.organisationContainer}>
            {languages.map((language, index) => (
              <div
                key={index}
                className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
              >
                <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                  {language.icon}
                  <span className={styles.text}>{language.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* frameworks */}

        <div className={styles.containerFrameworks}>
          <div>
            <p className={styles.titleLanguages2}>
              &gt; {t("languages.framework").toUpperCase()}{" "}
            </p>
          </div>

          <div className={styles.organisationContainer}>
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
              >
                <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                  {framework.icon}
                  <span className={styles.text}>{framework.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* librairies */}

        <div className={styles.containerLibrairies}>
          <div>
            <p className={styles.titleLanguages3}>
              &gt; {t("languages.libraries").toUpperCase()}
            </p>
          </div>

          <div className={styles.organisationContainer}>
            {librairies.map((library, index) => (
              <div
                key={index}
                className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
              >
                <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                  {library.icon}
                  <span className={styles.text}>{library.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* others */}
        <div className={styles.containerOthers}>
          <div>
            <p className={styles.titleLanguages4}>
              &gt; {t("languages.others").toUpperCase()}
            </p>
          </div>

          <div className={styles.organisationContainer}>
            {others.map((other, index) => (
              <div
                key={index}
                className={`${styles.containerEachBox} ${styles.small} ${styles.boxFunFact} ${styles.reveal}`}
              >
                <div className={`${styles.boxOutside} ${styles.smallMedium}`}>
                  {other.icon}
                  <span className={styles.text}>{other.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ButtonScrollTop />
      </div>
    </>
  );
}

export default Languages;
