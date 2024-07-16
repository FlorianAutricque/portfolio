import { useTranslation } from "react-i18next";

import styles from "./BtnTranslation.module.css";
import { useState } from "react";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const [active, setActive] = useState(
    localStorage.getItem("selectedLanguage") || "fr"
  );

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    setActive(lng);
  };

  return (
    <div className={styles.containerBtnTranslation}>
      <button
        className={`${styles.btnTranslation} ${
          active === "en" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        <p>EN</p>
      </button>
      <button
        className={`${styles.btnTranslation} ${
          active === "fr" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("fr")}
      >
        <p>FR</p>
      </button>
    </div>
  );
}

export default LanguageSelector;
