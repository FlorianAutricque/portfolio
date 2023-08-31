import PageNav from "../components/PageNav";
import styles from "./Infos.module.css";
import Button from "../components/Button";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";

function Infos() {
  return (
    <>
      <PageNav />
      <h1>Informations</h1>

      <div className={styles.container}>
        <div>
          <img src="/idimage.png" alt="Flo" className={styles.img} />
          <div className={styles.btnInfos}>
            <Button link="https://github.com/FlorianAutricque">
              <AiFillGithub size={20} /> Github
            </Button>
            <Button link="https://www.linkedin.com/in/florian-autricque/">
              <AiOutlineLinkedin size={20} /> Linkedin
            </Button>
          </div>
        </div>

        <p>
          <u>Location:</u> Montreal, Canada <br />
          <br />I am a team player, creative and passionate, Highly organized,
          "can-do" attitude, reliable. With a Bachelor's degree in territory
          development and environment, followed by a Master's degree in
          sustainable development, I have amassed valuable experience in the
          solar industry, where I successfully held management positions
          overseeing environmental projects. Motivated by a desire for career
          transition, I pursued further education in Full Stack Web Development
          at Le Wagon in Montreal, focusing my expertise on Front-end
          development.
        </p>
      </div>
    </>
  );
}

export default Infos;
