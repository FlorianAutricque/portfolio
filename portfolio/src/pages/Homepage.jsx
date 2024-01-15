import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

import { useState } from "react";

import { useTranslation } from "react-i18next";

function Homepage() {
  //show translation
  const [show, setShow] = useState(false);

  function handleShowTranslation() {
    setShow(!show);
  }

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);

    handleShowTranslation();
  };
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <h1 className={styles.homepage}>
          <span>Front-end </span>Developer <br />
          Creative
        </h1>
        {show ? (
          <button
            className={styles.BtnTranslation}
            onClick={() => changeLanguage("en")}
          >
            <p>EN</p>
          </button>
        ) : (
          <button
            className={styles.BtnTranslation}
            onClick={() => changeLanguage("fr")}
          >
            <p>FR</p>
          </button>
        )}
      </div>
    </>
  );
}

export default Homepage;
