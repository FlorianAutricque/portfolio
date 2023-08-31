import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <>
      <PageNav />
      <div className={styles.contact}>
        <h1>Contact</h1>
        <Button>
          <AiFillGithub size={20} />
          Github
        </Button>
        <Button>
          <AiOutlineLinkedin />
          Linkedin
        </Button>
      </div>
    </>
  );
}

export default Contact;
