import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PiSmileySad } from "react-icons/pi";

import styles from "./PageNotFound.module.css";
import styles2 from "../components/Button.module.css";

function PageNotFound() {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.containerError}>
        <PiSmileySad size={200} />
        <p className={styles.codeError}>404</p>

        <p>{t("errorMessage")}</p>
      </div>
      <span className={styles.btnError}>
        <Link to="/" className={styles2.button}>
          &larr; {t("buttonGoBack")}
        </Link>
      </span>
    </>
  );
}

export default PageNotFound;
