import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import Button from "./Button";
import styles from "./ContactAllButtons.module.css";
import { useEffect } from "react";

function ContactAllButtons() {
  useEffect(() => {
    const element2 = document.querySelector(`.${styles.contactButton}`);

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer2 = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element2.classList.add(styles.show);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer2.observe(element2);
  }, []);

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
