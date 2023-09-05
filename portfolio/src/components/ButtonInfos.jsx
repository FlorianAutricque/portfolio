import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Button from "./Button";
import styles from "./ButtonInfos.module.css";

function ButtonInfos() {
  return (
    <div className={styles.btnInfos}>
      <Button link="https://github.com/FlorianAutricque">
        <span className={styles.textLink}>
          {" "}
          <AiFillGithub size={20} /> Github{" "}
        </span>
      </Button>
      <Button link="https://www.linkedin.com/in/florian-autricque/">
        <span className={styles.textLink}>
          {" "}
          <AiOutlineLinkedin size={20} /> Linkedin
        </span>
      </Button>
    </div>
  );
}

export default ButtonInfos;
