import PageNav from "../components/PageNav";
import styles from "./Experiences.module.css";
import VerticalLineExperiences from "../components/VerticalLineExperiences";
import AllExperiences from "../components/AllExperiences";

function Experiences() {
  return (
    <>
      <PageNav />
      <h1>Experiences</h1>
      <div className={styles.containerExp}>
        <VerticalLineExperiences />
        <AllExperiences />
      </div>
    </>
  );
}

export default Experiences;
