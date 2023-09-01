import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useState } from "react";

function PageNav() {
  const [hoverStates, setHoverStates] = useState({
    infos: false,
    experiences: false,
    languages: false,
    projects: false,
    contact: false,
  });

  function handleHoverIn(linkName) {
    setHoverStates(prevStates => ({ ...prevStates, [linkName]: true }));
  }

  function handleHoverOut(linkName) {
    setHoverStates(prevStates => ({ ...prevStates, [linkName]: false }));
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/infos"
            onMouseEnter={() => handleHoverIn("infos")}
            onMouseLeave={() => handleHoverOut("infos")}
            className={hoverStates.infos ? styles.hover : ""}
          >
            Infos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiences"
            onMouseEnter={() => handleHoverIn("experiences")}
            onMouseLeave={() => handleHoverOut("experiences")}
            className={hoverStates.experiences ? styles.hover : ""}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/languages"
            onMouseEnter={() => handleHoverIn("languages")}
            onMouseLeave={() => handleHoverOut("languages")}
            className={hoverStates.languages ? styles.hover : ""}
          >
            Languages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onMouseEnter={() => handleHoverIn("projects")}
            onMouseLeave={() => handleHoverOut("projects")}
            className={hoverStates.projects ? styles.hover : ""}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onMouseEnter={() => handleHoverIn("contact")}
            onMouseLeave={() => handleHoverOut("contact")}
            className={hoverStates.contact ? styles.hover : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
