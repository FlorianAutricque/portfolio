import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BsBoxArrowInUp } from "react-icons/bs";

import styles from "./ButtonScrollTop.module.css";
import styles2 from "./Button.module.css";

function ButtonScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { t } = useTranslation();

  return (
    <div className={styles.buttonScrollTop}>
      {isVisible && (
        <Link onClick={scrollToTop} className={styles2.button}>
          <span className={styles.textLink}> {t("buttonBackToTop")}</span>
        </Link>
      )}
    </div>
  );
}

export default ButtonScrollTop;
