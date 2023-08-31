import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/infos">Infos</NavLink>
        </li>
        <li>
          <NavLink to="/experiences">Experiences</NavLink>
        </li>
        <li>
          <NavLink to="/languages">Languages</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
