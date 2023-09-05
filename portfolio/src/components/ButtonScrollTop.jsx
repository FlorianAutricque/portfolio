import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className={styles.buttonScrollTop}>
      {isVisible && (
        <Link onClick={scrollToTop} className={styles2.button}>
          <span className={styles.textLink}>
            {" "}
            <BsBoxArrowInUp /> Back to Top
          </span>
        </Link>
      )}
    </div>
  );
}

export default ButtonScrollTop;
