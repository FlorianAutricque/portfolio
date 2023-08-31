import PageNav from "../components/PageNav";
import styles from "./Infos.module.css";

function Infos() {
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <img src="/idimage.png" alt="Flo" className={styles.img} />

        <p>text</p>
      </div>
    </>
  );
}

export default Infos;
