import PageNav from "../components/PageNav";
import styles from "./Infos.module.css";
import ButtonInfos from "../components/ButtonInfos";
import AllFunFacts from "../components/AllFunFacts";

function Infos() {
  return (
    <>
      <PageNav />
      <h1>Informations</h1>

      <div className={styles.container}>
        <div>
          <img src="/idimage.png" alt="Flo" className={styles.img} />
          <ButtonInfos />
        </div>

        <p>
          <u>Location:</u> Montreal, Canada <br />
          <br />I am a team player, creative and passionate, Highly organized,
          "can-do" attitude, reliable. With a Bachelor's degree in territory
          development and environment, followed by a Master's degree in
          sustainable development, I have amassed valuable experience in the
          solar industry, where I successfully held management positions
          overseeing environmental projects.
          <br /> <br />
          Motivated by a desire for career transition, I pursued further
          education in Full Stack Web Development at Le Wagon in Montreal,
          focusing my expertise on Front-end development.
        </p>
      </div>
      <div className={styles.containerFunFact}>
        <AllFunFacts />
      </div>
    </>
  );
}

export default Infos;
