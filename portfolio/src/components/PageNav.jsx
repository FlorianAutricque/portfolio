import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import styles from "./PageNav.module.css";

import Logo from "./Logo";

function PageNav() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  //Projects stays green when entering project
  const location = useLocation();

  const projectDetail = location.pathname.includes("/project/");

  return (
    <nav className={styles.nav}>
      <Logo />

      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li onClick={removeActive}>
          <NavLink
            to="/infos"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Infos
          </NavLink>
        </li>

        <li onClick={removeActive}>
          <NavLink
            to="/experiences"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Experiences
          </NavLink>
        </li>

        <li onClick={removeActive}>
          <NavLink
            to="/languages"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Languages
          </NavLink>
        </li>

        <li onClick={removeActive}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive || projectDetail ? styles.active : ""
            }
          >
            Projects
          </NavLink>
        </li>

        <li onClick={removeActive}>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
