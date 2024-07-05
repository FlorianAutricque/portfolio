import PageNav from "../components/PageNav";
import styles from "./Experiences.module.css";

import ButtonScrollTop from "../components/ButtonScrollTop";
import { useTranslation } from "react-i18next";

import { TbSchool } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experiences() {
  const { t } = useTranslation();

  const experiences = [
    {
      id: 1,
      date: t("date.17"),
      title: t("expTitle.14"),
      location: "Montreal",
      description: t("experienceExp.15"),
      icon: "school",
    },
    {
      id: 2,
      date: t("date.16"),
      title: t("expTitle.13"),
      location: "Montreal",
      description: t("experienceExp.14"),
      icon: "work",
    },
    {
      id: 3,
      date: t("date.15"),
      title: t("expTitle.12"),
      location: "Montreal",
      description: t("experienceExp.13"),
      icon: "work",
    },
    {
      id: 4,
      date: t("date.14"),
      title: t("expTitle.11"),
      location: "Udemy",
      description: t("experienceExp.12"),
      icon: "school",
    },
    {
      id: 5,
      date: t("date.1"),
      title: t("expTitle.9"),
      location: "Udemy",
      description: `<a href="https://www.udemy.com/course/the-ultimate-react-course/" target="_blank" > React.js</a>, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
      CSS Modules, Styled Components, Context API, React Router.`,
      icon: "school",
    },
    {
      id: 6,
      date: t("date.2"),
      title: t("expTitle.10"),
      location: "Udemy",
      description: `<a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" > Javascript</a>; Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6
      modules.`,
      icon: "school",
    },
    {
      id: 7,
      date: t("date.3"),
      title: t("expTitle.8"),
      location: "Le Wagon Montreal",
      description: t("experienceExp.1"),
      icon: "school",
    },
    {
      id: 8,
      date: t("date.4"),
      title: t("expTitle.1"),
      location: "France",
      description: t("experienceExp.2"),
      icon: "work",
    },
    {
      id: 9,
      date: t("date.5"),
      title: t("expTitle.2"),
      location: [t("localisationExp.1"), " - Stralis Energy"],
      description: t("experienceExp.3"),
      icon: "work",
    },
    {
      id: 10,
      date: t("date.6"),
      title: t("expTitle.2"),
      location: [t("localisationExp.2"), " - All Energy Contracting"],
      description: t("experienceExp.4"),
      icon: "work",
    },
    {
      id: 11,
      date: t("date.7"),
      title: t("expTitle.3"),
      location: [t("localisationExp.3"), " - Protech Group"],
      description: t("experienceExp.5"),
      icon: "work",
    },
    {
      id: 12,
      date: t("date.8"),
      title: t("expTitle.3"),
      location: [t("localisationExp.3"), " - Bamford Engineering & Consulting"],
      description: t("experienceExp.6"),
      icon: "work",
    },
    {
      id: 13,
      date: t("date.9"),
      title: t("expTitle.4"),
      location: [t("localisationExp.3"), " - Bamford Engineering & Consulting"],
      description: t("experienceExp.7"),
      icon: "work",
    },
    {
      id: 14,
      date: t("date.10"),
      title: t("expTitle.5"),
      location: t("locationExp.1"),
      description: t("experienceExp.8"),
      icon: "school",
    },
    {
      id: 15,
      date: t("date.12"),
      title: t("expTitle.7"),
      location: t("locationExp.2"),
      description: t("experienceExp.10"),
      icon: "school",
    },
  ];

  let workIconStyles = { background: "var(--color-box-1)" };
  let schoolIconStyles = { background: "var(--color-box-2)" };

  return (
    <>
      <PageNav />
      <h1>Experiences</h1>
      <div>
        <VerticalTimeline
          lineColor={"linear-gradient(var(--color-box-1), var(--color-box-2))"}
        >
          {experiences.map(element => {
            let isWorkIcon = element.icon === "work";

            return (
              <>
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  iconStyle={{
                    ...(isWorkIcon ? workIconStyles : schoolIconStyles),
                    boxShadow: `0 0 0 4px ${
                      isWorkIcon ? "var(--color-box-2)" : "var(--color-box-1)"
                    },inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
                  }}
                  icon={isWorkIcon ? <BsPersonWorkspace /> : <TbSchool />}
                  contentStyle={{
                    background:
                      "linear-gradient(to bottom right, #27292ba4, #454849b9",
                    color: "var(--color-text)",
                    boxShadow: "none",
                    border: "1px solid white",
                  }}
                  dateClassName={styles.date}
                >
                  <h3
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: element.title }}
                  ></h3>
                  <p>
                    <em>{element.location}</em>
                  </p>
                  <p
                    id="description"
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: element.description }}
                  />
                </VerticalTimelineElement>
              </>
            );
          })}
        </VerticalTimeline>
        <ButtonScrollTop />
      </div>
    </>
  );
}

export default Experiences;
