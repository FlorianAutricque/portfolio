import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

import BtnTranslation from "../translation/BtnTranslation";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";

function Homepage() {
  //show translation
  const [show, setShow] = useState(false);

  function handleShowTranslation() {
    setShow(!show);
  }
  return (
    <>
      <PageNav />
      <div className={styles.container}>
        <h1 className={styles.homepage}>
          <span>Front-end </span>Developer <br />
          Creative
        </h1>
        <span
          className={`${styles.BtnTranslation} ${show ? styles.active : ""}`}
          onClick={handleShowTranslation}
        >
          <p>
            <MdLanguage size={25} />
          </p>
          {show && <BtnTranslation onCloseDropdown={() => setShow(false)} />}
        </span>
      </div>
    </>
  );
}

export default Homepage;
