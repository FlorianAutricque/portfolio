import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./ButtonScrollTop.module.css";
import styles2 from "./Button.module.css";

function ButtonScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();

  return (
    <div className={styles.buttonScrollTop}>
      <Link onClick={scrollToTop} className={styles2.button}>
        <span className={styles.textLink}> {t("buttonBackToTop")}</span>
      </Link>

      <Link to="/" onClick={scrollToTop} className={styles2.button}>
        <span className={styles.textLink}> &gt; cd /</span>
      </Link>
    </div>
  );
}

export default ButtonScrollTop;
