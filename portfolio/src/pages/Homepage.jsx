import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";

function Homepage({ darkMode }) {
  return (
    <div className={styles.containerHomepage}>
      <Link to="/infos">
        <h1 className={styles.homepage}>
          <span>Front-end </span>Developer <br />
          Creative
        </h1>
      </Link>
    </div>
  );
}

export default Homepage;
