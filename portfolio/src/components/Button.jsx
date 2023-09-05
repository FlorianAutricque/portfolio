import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, link }) {
  function handleClick(e) {
    e.preventDefault();
    if (link.startsWith("mailto:")) {
      window.location.href = link;
    } else {
      window.open(link, "_blank");
    }
  }
  return (
    <Link onClick={handleClick} className={styles.button}>
      <span className={styles.textLink}>{children}</span>
    </Link>
  );
}

export default Button;
