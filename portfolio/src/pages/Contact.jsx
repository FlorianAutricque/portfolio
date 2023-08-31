import ContactAllButtons from "../components/ContactAllButtons";
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <PageNav />
      <div className={styles.contact}>
        <h1>Contact</h1>
        <p>
          Need some HTML, CSS, or JavaScript magic? Don't hesitate! <br /> Reach
          out to me. Whether it's about web design, responsive layouts, or
          designing exceptional user journeys, I'm here to help.
          <br /> Let's turn your digital dreams into reality!
        </p>
        <ContactAllButtons />
      </div>
    </>
  );
}

export default Contact;
