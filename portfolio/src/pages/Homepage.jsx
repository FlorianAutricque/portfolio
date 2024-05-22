import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <PageNav />
      <div className={styles.containerHomepage}>
        <Link to="/infos">
          <h1 className={styles.homepage}>
            <span>Front-end </span>Developer <br />
            Creative
          </h1>
        </Link>
      </div>
    </>
  );
}

export default Homepage;
