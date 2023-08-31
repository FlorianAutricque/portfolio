import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <h1 className={styles.homepage}>
          <span>Front-end </span>Developer <br />
          Creative
        </h1>
      </div>
    </>
  );
}

export default Homepage;
