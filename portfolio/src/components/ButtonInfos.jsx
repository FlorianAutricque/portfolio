import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Button from "./Button";
import styles from "./ButtonInfos.module.css";

function ButtonInfos() {
  return (
    <div className={styles.btnInfos}>
      <Button link="https://github.com/FlorianAutricque">
        <AiFillGithub size={20} /> Github
      </Button>
      <Button link="https://www.linkedin.com/in/florian-autricque/">
        <AiOutlineLinkedin size={20} /> Linkedin
      </Button>
    </div>
  );
}

export default ButtonInfos;
