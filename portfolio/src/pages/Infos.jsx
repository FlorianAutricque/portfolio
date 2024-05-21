import { useTranslation } from "react-i18next";

import { CiLocationOn } from "react-icons/ci";

import PageNav from "../components/PageNav";
import styles from "./Infos.module.css";
import ButtonInfos from "../components/ButtonInfos";

import { useEffect } from "react";

import { GiPencilBrush } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSkiing } from "react-icons/fa";

function Infos() {
  const { t } = useTranslation();

  const AllFunFacts = [
    {
      icon: <GiPencilBrush size={70} />,
      title: "Art",
      text: t("funfacts.1"),
    },
    {
      icon: <FaPeopleGroup size={70} />,
      title: "Management",
      text: t("funfacts.2"),
    },
    {
      icon: <FaSkiing size={70} />,
      title: "Sport",
      text: t("funfacts.3"),
    },
  ];

  useEffect(() => {
    const elementsToObserve = [
      document.querySelector(`.${styles.containerTextOne}`),
      document.querySelector(`.${styles.hyperlink}`),
      document.querySelector(`.${styles.boxFunFact}:nth-child(1) `),
      document.querySelector(`.${styles.boxFunFact}:nth-child(2) `),
      document.querySelector(`.${styles.boxFunFact}:nth-child(3) `),
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
          observer.unobserve(entry.target);
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
      <h1>Informations</h1>

      <div className={styles.container}>
        <div>
          <img src="/idimageWebp.webp" alt="Flo" className={styles.img} />
          <ButtonInfos />
        </div>

        <div>
          <CiLocationOn /> <u>{t("locationInfos")}</u> Montreal, Canada
          <br />
          <br />
          <div
            className={styles.containerTextOne}
            dangerouslySetInnerHTML={{
              __html: t("textInfos.1"),
            }}
          />
          <br /> <br />
          <div
            dangerouslySetInnerHTML={{
              __html: t("textInfos.2", {
                LeWagon:
                  '<a href="https://www.lewagon.com/fr" target="_blank">Le Wagon</a>',
              }),
            }}
            className={styles.hyperlink}
          ></div>
        </div>
      </div>

      <div className={styles.containerFunFact}>
        {AllFunFacts.map((fact, index) => (
          <div
            key={index}
            className={`${styles.boxFunFact} ${styles.large} ${styles.reveal}`}
          >
            <div className={`${styles.boxOutside} ${styles.mediumLarge}`}>
              {fact.icon}
              <h3>{fact.title}</h3>
              <p className={styles.text}>{fact.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Infos;
