import { useTranslation } from "react-i18next";

import Flag from "react-world-flags";

import styles from "./BtnTranslation.module.css";

function LanguageSelector({ onCloseDropdown }) {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);

    onCloseDropdown();
  };

  return (
    <div className={styles.containerBtnTranslation}>
      <button
        className={styles.btnTranslation}
        onClick={() => changeLanguage("en")}
      >
        <Flag code="gb" height="25" width="40" />
      </button>
      <button
        className={styles.btnTranslation}
        onClick={() => changeLanguage("fr")}
      >
        <Flag code="fr" height="25" width="40" />
      </button>
    </div>
  );
}

export default LanguageSelector;
