import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Scroll from "../components/Scroll";
import styles from "./AllExperiences.module.css";

const Experiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t("expTitle.12"),
      date: t("date.15"),
      location: "Montreal",
      experience: t("experienceExp.13"),
    },
    {
      title: t("expTitle.11"),
      date: t("date.14"),
      location: "Udemy",
      experience: t("experienceExp.12"),
    },
    {
      title: t("expTitle.9"),
      date: t("date.1"),
      location: "Udemy",
      experience: `React.js, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
      CSS Modules, Styled Components, Context API, React Router.`,
    },
    {
      title: t("expTitle.10"),
      date: t("date.2"),
      location: "Udemy",
      experience: `Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6
      modules.`,
    },
    {
      title: t("expTitle.8"),
      date: t("date.3"),
      location: "Le Wagon Montreal",
      experience: t("experienceExp.1"),
    },
    {
      title: t("expTitle.1"),
      date: t("date.4"),
      location: "France",
      experience: t("experienceExp.2"),
    },
    {
      title: t("expTitle.2"),
      date: t("date.5"),
      location: "Stralis Energy",
      location2: [<CiLocationOn />, t("localisationExp.1")],
      experience: [
        t("experienceExp.3.1"),
        t("experienceExp.3.2"),
        t("experienceExp.3.3"),
      ],
    },
  ];
  return (
    <>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`${styles.container} ${index % 2 === 1 ? styles.odd : ""}`}
        >
          <div
            className={`${styles.left} ${
              index % 2 === 1 ? styles.odd : styles.even
            }`}
          >
            <Scroll>
              <div className={styles.x}>
                <h3>{t(experience.title)}</h3>
                <h5>{t(experience.date)}</h5>
                <p>
                  <em>{experience.location}</em>
                </p>
                <p>{experience.location2 ? experience.location2 : ""}</p>
                <br />

                {Array.isArray(experience.experience) ? (
                  experience.experience.map((exp, expIndex) => (
                    <p key={expIndex}>{t(exp)}</p>
                  ))
                ) : (
                  <p>{t(experience.experience)}</p>
                )}
              </div>
            </Scroll>
          </div>
          <Scroll>
            <div className={styles.donut}></div>
          </Scroll>

          <div
            className={`${styles.right} ${
              index % 2 === 1 ? styles.odd : styles.even
            }`}
          >
            <Scroll>
              <h3 key={index}>{t(experience.date)}</h3>
            </Scroll>
          </div>
        </div>
      ))}
    </>
  );
};

// function Experiences({ title, date, location, experience }) {
//   return (
//     (
//       <>
//         <Scroll position={styles.first}>
//           <h3>{t(title)}</h3>
//           <h5>{t(date)}</h5>
//           <p>
//             <em>{location}</em>
//           </p>
//           <br />
//           {t(experience)}
//         </Scroll>
//       </>
//     ),
//     {
//       /* <Scroll position={styles.first}>
//         <h3>{t("expTitle.12")}</h3>
//         <h5>{t("date.15")}</h5>
//         <p>
//           <em>Montreal</em>
//         </p>
//         <br />
//         {t("experienceExp.13")}
//       </Scroll> */
//     },
//     {
//       /* <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>{t("expTitle.11")}</h3>
//           <h5>{t("date.14")}</h5>
//           <p>
//             <em>Udemy</em>
//           </p>
//           <br />
//           {t("experienceExp.12")}
//         </Scroll>
//       </div> */
//     },
//     {
//       /* <Scroll position={styles.left}>
//         <h3>{t("expTitle.9")}</h3>
//         <h5>{t("date.1")}</h5>
//         <p>
//           <em>Udemy</em>
//         </p>
//         <br />
//         React.js, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
//         CSS Modules, Styled Components, Context API, React Router.
//       </Scroll> */
//     },
//     {
//       /* <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>{t("expTitle.10")}</h3>
//           <h5>{t("date.2")}</h5>
//           <p>
//             <em>Udemy</em>
//           </p>
//           <br />
//           Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6
//           modules.
//         </Scroll>
//       </div> */
//     },
//     {
//       /* <Scroll position={styles.left}>
//         <h3>{t("expTitle.8")}</h3>
//         <h5>{t("date.3")}</h5>
//         <p>
//           <em>Le Wagon Montreal</em>
//         </p>
//         <br />
//         {t("experienceExp.1")}
//       </Scroll> */
//     },
//     {
//       /* <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>{t("expTitle.1")}</h3>
//           <h5>{t("date.4")}</h5>
//           <p>
//             <em>France</em>
//           </p>
//           <br />
//           {t("experienceExp.2")}
//         </Scroll>
//       </div> */
//     },
//     {
//       /* <Scroll position={styles.left}>
//         <h3>{t("expTitle.2")}</h3>
//         <h5>{t("date.5")}</h5>
//         <p>
//           <em>Stralis Energy</em>
//         </p>
//         <span>
//           <CiLocationOn /> {t("localisationExp.1")}
//         </span>
//         <br /> <br />
//         {t("experienceExp.3.1")} <br />
//         {t("experienceExp.3.2")}
//         <br />
//         {t("experienceExp.3.3")}
//       </Scroll> */
//     },
//     {
//       /* <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>Team Leader</h3>
//           <h5>{t("date.6")}</h5>
//           <p>
//             <em>All Energy Contracting</em>
//           </p>
//           <span>
//             <CiLocationOn /> {t("localisationExp.2")}
//           </span>{" "}
//           <br /> <br />
//           {t("experienceExp.4.1")} <br /> {t("experienceExp.4.2")}
//         </Scroll>
//       </div>

//       <Scroll position={styles.left}>
//         <h3>{t("expTitle.3")}</h3>
//         <h5>{t("date.7")}</h5>
//         <p>
//           <em>Protech Group</em>
//         </p>
//         <span>
//           <CiLocationOn /> {t("localisationExp.3")}
//         </span>{" "}
//         <br /> <br /> {t("experienceExp.5.1")}
//         <br />
//         {t("experienceExp.5.2")}
//         <br />
//         {t("experienceExp.5.3")}
//         <br />
//         {t("experienceExp.5.4")}
//       </Scroll>

//       <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>{t("expTitle.3")}</h3>
//           <h5>{t("date.8")}</h5>
//           <p>
//             <em>Bamford Engineering & Consulting</em>
//           </p>
//           <span>
//             <CiLocationOn /> {t("localisationExp.3")}
//           </span>{" "}
//           <br /> <br /> {t("experienceExp.6.1")}
//           <br />
//           {t("experienceExp.6.2")}
//           <br />
//           {t("experienceExp.6.3")}
//         </Scroll>
//       </div>

//       <Scroll position={styles.left}>
//         <h3>{t("expTitle.4")}</h3>
//         <h5>{t("date.9")}</h5>
//         <p>
//           <em>Bamford Engineering & Consulting</em>
//         </p>
//         <span>
//           <CiLocationOn /> {t("localisationExp.3")}
//         </span>{" "}
//         <br /> <br /> {t("experienceExp.7")}
//       </Scroll>

//       <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>{t("expTitle.5")}</h3>
//           <h5>{t("date.10")}</h5>
//           <p>
//             <em>{t("locationExp.1")}</em>
//           </p>
//           <br />
//           <span>{t("experienceExp.8")}</span>
//         </Scroll>
//       </div>

//       <Scroll position={styles.left}>
//         <h3>{t("expTitle.6")}</h3>
//         <h5>{t("date.11")}</h5>
//         <p>
//           <em>XPO Logistics</em>
//         </p>
//         <br />
//         {t("experienceExp.9.1")} <br />
//         {t("experienceExp.9.2")} <br />
//         {t("experienceExp.9.3")}
//       </Scroll>

//       <div className={styles.margin}>
//         <Scroll position={styles.right}>
//           <h3>{t("expTitle.7")}</h3>
//           <h5>{t("date.12")}</h5>
//           <p>
//             <em>{t("locationExp.2")}</em>
//           </p>
//           <br />
//           <span>{t("experienceExp.10")}</span>
//         </Scroll>
//       </div>

//       <Scroll position={styles.left}>
//         <h3>{t("expTitle.6")}</h3>
//         <h5>{t("date.13")}</h5>
//         <p>
//           <em>Carrefour</em>
//         </p>
//         <br />
//         {t("experienceExp.11.1")}
//         <br />
//         {t("experienceExp.11.2")}
//         <br />
//         {t("experienceExp.11.3")}
//         <br />
//         {t("experienceExp.11.4")}
//         <br />
//         {t("experienceExp.11.5")}
//       </Scroll> */
//     }
//   );
// }

export default Experiences;
