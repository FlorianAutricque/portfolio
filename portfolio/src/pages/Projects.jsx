import PageNav from "../components/PageNav";
import ButtonScrollTop from "../components/ButtonScrollTop";
import ProjectsBox from "../components/ProjectsBox";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div>
      <PageNav />

      <h1>{t("listOfProjects")}</h1>

      <ProjectsBox />

      <ButtonScrollTop />
    </div>
  );
}

export default Projects;
