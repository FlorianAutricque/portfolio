import { Link, useParams } from "react-router-dom";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

function Project() {
  const { projectId } = useParams();

  const projects = {
    1: {
      projectId: 1,
      name: "coucou",
    },
    2: {
      projectId: 2,
      name: "caca",
    },
  };

  const project = projects[projectId];

  return (
    <>
      <PageNav />
      <div>
        <h1>Project Details</h1>
        <p>Project ID: {project.projectId}</p>
        <p>Project Name: {project.name}</p>
      </div>

      <Link to="/projects">Go back</Link>
    </>
  );
}

export default Project;
