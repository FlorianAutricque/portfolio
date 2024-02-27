import PageNav from "../components/PageNav";
import styles from "./Experiences.module.css";

import ButtonScrollTop from "../components/ButtonScrollTop";
import { useTranslation } from "react-i18next";

import { CiLocationOn } from "react-icons/ci";

import { Chrono } from "react-chrono";

function Experiences() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("date.15"),
      cardTitle: t("expTitle.12"),
      cardSubtitle: "Montreal",
      cardDetailedText: t("experienceExp.13"),
    },
    {
      title: t("date.14"),
      cardTitle: t("expTitle.11"),
      cardSubtitle: "Udemy",
      cardDetailedText: t("experienceExp.12"),
    },
    {
      title: t("date.1"),
      cardTitle: t("expTitle.9"),
      cardSubtitle: "Udemy",
      cardDetailedText: `React.js, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
      CSS Modules, Styled Components, Context API, React Router.`,
    },
    {
      title: t("date.2"),
      cardTitle: t("expTitle.10"),
      cardSubtitle: "Udemy",
      cardDetailedText: `Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6
      modules.`,
    },
    {
      title: t("date.3"),
      cardTitle: t("expTitle.8"),
      cardSubtitle: "Le Wagon Montreal",
      cardDetailedText: t("experienceExp.1"),
    },
    {
      title: t("date.4"),
      cardTitle: t("expTitle.1"),
      cardSubtitle: "France",
      cardDetailedText: t("experienceExp.2"),
    },
    {
      title: t("date.5"),
      cardTitle: t("expTitle.2"),
      cardSubtitle: [t("localisationExp.1"), " - Stralis Energy"],
      cardDetailedText: [
        t("experienceExp.3.1"),
        t("experienceExp.3.2"),
        t("experienceExp.3.3"),
      ],
    },
    {
      title: t("date.6"),
      cardTitle: "Team Leader",
      cardSubtitle: [t("localisationExp.2"), " - All Energy Contracting"],
      cardDetailedText: [t("experienceExp.4.1"), t("experienceExp.4.2")],
    },
    {
      title: t("date.7"),
      cardTitle: t("expTitle.3"),
      cardSubtitle: [t("localisationExp.3"), " - Protech Group"],
      cardDetailedText: [
        t("experienceExp.5.1"),
        t("experienceExp.5.2"),
        t("experienceExp.5.3"),
        t("experienceExp.5.4"),
      ],
    },
    {
      title: t("date.8"),
      cardTitle: t("expTitle.3"),
      cardSubtitle: [
        t("localisationExp.3"),
        " - Bamford Engineering & Consulting",
      ],
      cardDetailedText: [
        t("experienceExp.6.1"),
        t("experienceExp.6.2"),
        t("experienceExp.6.3"),
      ],
    },
    {
      title: t("date.10"),
      cardTitle: t("expTitle.5"),
      cardSubtitle: t("locationExp.1"),
      cardDetailedText: t("experienceExp.8"),
    },
    {
      title: t("date.12"),
      cardTitle: t("expTitle.7"),
      cardSubtitle: t("locationExp.2"),
      cardDetailedText: t("experienceExp.10"),
    },
  ];
  return (
    <>
      <PageNav />
      <h1>Experiences</h1>
      <div className={styles.containerExp}>
        <Chrono items={experiences} mode="VERTICAL_ALTERNATING" />
      </div>
      <ButtonScrollTop />
    </>
  );
}

export default Experiences;
