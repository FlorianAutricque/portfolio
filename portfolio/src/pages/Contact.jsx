import React from "react";
import { useTranslation } from "react-i18next";

import ContactAllButtons from "../components/ContactAllButtons";
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";

function Contact() {
  const { t } = useTranslation();
  const titleParts = t("contactText").split("\n");

  return (
    <>
      <PageNav />

      <div className={styles.contact}>
        <h1>Contact</h1>

        {titleParts.map((part, index) => (
          <p key={index}>{part}</p>
        ))}

        <ContactAllButtons />
      </div>
    </>
  );
}

export default Contact;
