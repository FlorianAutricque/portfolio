import PageNav from "../components/PageNav";
import styles from "./Experiences.module.css";
import VerticalLineExperiences from "../components/VerticalLineExperiences";
import AllExperiences from "../components/AllExperiences";
import ButtonScrollTop from "../components/ButtonScrollTop";

function Experiences() {
  return (
    <>
      <PageNav />
      <h1>Experiences</h1>
      <div className={styles.containerExp}>
        <VerticalLineExperiences />
        <AllExperiences />
      </div>
      <ButtonScrollTop />
    </>
  );
}

export default Experiences;
