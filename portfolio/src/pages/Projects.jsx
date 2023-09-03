import { NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";

function Projects() {
  return (
    <div>
      <PageNav />

      <NavLink to="/project/1">Project 1</NavLink>
      <NavLink to="/project/2">Project 2</NavLink>
    </div>
  );
}

export default Projects;
