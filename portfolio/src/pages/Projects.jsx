import { useTranslation } from "react-i18next";

import PageNav from "../components/PageNav";
import ButtonScrollTop from "../components/ButtonScrollTop";
import ProjectsBox from "../components/ProjectsBox";

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
