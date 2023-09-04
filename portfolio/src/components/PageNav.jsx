import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/infos"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Infos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiences"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/languages"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Languages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
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
