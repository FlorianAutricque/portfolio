import { BiSolidLocationPlus } from "react-icons/bi";
import Scroll from "../components/Scroll";
import styles from "./AllExperiences.module.css";
import { useTranslation } from "react-i18next";

function AllExperiences() {
  const { t } = useTranslation();
  return (
    <>
      <Scroll position={styles.first}>
        <h3>{t("expTitle.9")}</h3>
        <h5>{t("date.1")}</h5>
        <p>
          <em>Udemy</em>
        </p>
        <br />
        React.js, Tailwind CSS, supabase, Redux.js, JavaScript eXtension (JSX),
        CSS Modules, Styled Components, Context API, React Router.
      </Scroll>

      <div className={styles.margin}>
        <Scroll position={styles.right}>
          <h3>{t("expTitle.10")}</h3>
          <h5>{t("date.2")}</h5>
          <p>
            <em>Udemy</em>
          </p>
          <br />
          Modern OOP, Asynchronous JavaScript, NPM, Parcel, Babel and ES6
          modules.
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>{t("expTitle.8")}</h3>
        <h5>{t("date.3")}</h5>
        <p>
          <em>Le Wagon Montreal</em>
        </p>
        <br />
        {t("experienceExp.1")}
      </Scroll>

      <div className={styles.margin}>
        <Scroll position={styles.right}>
          <h3>{t("expTitle.1")}</h3>
          <h5>{t("date.4")}</h5>
          <p>
            <em>France</em>
          </p>
          <br />
          {t("experienceExp.2")}
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>{t("expTitle.2")}</h3>
        <h5>{t("date.5")}</h5>
        <p>
          <em>Stralis Energy</em>
        </p>
        <span>
          <BiSolidLocationPlus /> {t("localisationExp.1")}
        </span>
        <br /> <br />
        {t("experienceExp.3.1")} <br />
        {t("experienceExp.3.2")}
        <br />
        {t("experienceExp.3.3")}
      </Scroll>

      <div className={styles.margin}>
        <Scroll position={styles.right}>
          <h3>Team Leader</h3>
          <h5>{t("date.6")}</h5>
          <p>
            <em>All Energy Contracting</em>
          </p>
          <span>
            <BiSolidLocationPlus /> {t("localisationExp.2")}
          </span>{" "}
          <br /> <br />
          {t("experienceExp.4.1")} <br /> {t("experienceExp.4.2")}
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>{t("expTitle.3")}</h3>
        <h5>{t("date.7")}</h5>
        <p>
          <em>Protech Group</em>
        </p>
        <span>
          <BiSolidLocationPlus /> {t("localisationExp.3")}
        </span>{" "}
        <br /> <br /> {t("experienceExp.5.1")}
        <br />
        {t("experienceExp.5.2")}
        <br />
        {t("experienceExp.5.3")}
        <br />
        {t("experienceExp.5.4")}
      </Scroll>

      <div className={styles.margin}>
        <Scroll position={styles.right}>
          <h3>{t("expTitle.3")}</h3>
          <h5>{t("date.8")}</h5>
          <p>
            <em>Bamford Engineering & Consulting</em>
          </p>
          <span>
            <BiSolidLocationPlus /> {t("localisationExp.3")}
          </span>{" "}
          <br /> <br /> {t("experienceExp.6.1")}
          <br />
          {t("experienceExp.6.2")}
          <br />
          {t("experienceExp.6.3")}
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>{t("expTitle.4")}</h3>
        <h5>{t("date.9")}</h5>
        <p>
          <em>Bamford Engineering & Consulting</em>
        </p>
        <span>
          <BiSolidLocationPlus /> {t("localisationExp.3")}
        </span>{" "}
        <br /> <br /> {t("experienceExp.7")}
      </Scroll>

      <div className={styles.margin}>
        <Scroll position={styles.right}>
          <h3>{t("expTitle.5")}</h3>
          <h5>{t("date.10")}</h5>
          <p>
            <em>{t("locationExp.1")}</em>
          </p>
          <br />
          <span>{t("experienceExp.8")}</span>
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>{t("expTitle.6")}</h3>
        <h5>{t("date.11")}</h5>
        <p>
          <em>XPO Logistics</em>
        </p>
        <br />
        {t("experienceExp.9.1")} <br />
        {t("experienceExp.9.2")} <br />
        {t("experienceExp.9.3")}
      </Scroll>

      <div className={styles.margin}>
        <Scroll position={styles.right}>
          <h3>{t("expTitle.7")}</h3>
          <h5>{t("date.12")}</h5>
          <p>
            <em>{t("locationExp.2")}</em>
          </p>
          <br />
          <span>{t("experienceExp.10")}</span>
        </Scroll>
      </div>

      <Scroll position={styles.left}>
        <h3>{t("expTitle.6")}</h3>
        <h5>{t("date.13")}</h5>
        <p>
          <em>Carrefour</em>
        </p>
        <br />
        {t("experienceExp.11.1")}
        <br />
        {t("experienceExp.11.2")}
        <br />
        {t("experienceExp.11.3")}
        <br />
        {t("experienceExp.11.4")}
        <br />
        {t("experienceExp.11.5")}
      </Scroll>
    </>
  );
}

export default AllExperiences;
