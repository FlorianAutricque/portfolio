import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
import styles from "./ContactAllButtons.module.css";

function ContactAllButtons() {
  return (
    <div className={styles.contactButton}>
      <Button link="https://github.com/FlorianAutricque">
        <AiFillGithub size={20} /> Github
      </Button>
      <Button link="https://www.linkedin.com/in/florian-autricque/">
        <AiOutlineLinkedin size={20} /> Linkedin
      </Button>

      <Button link="mailto:fautricque@gmail.com">
        <AiOutlineMail size={20} /> Email
      </Button>
    </div>
  );
}

export default ContactAllButtons;
