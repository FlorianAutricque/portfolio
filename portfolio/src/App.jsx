import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Infos from "./pages/Infos";
import Experiences from "./pages/Experiences";
import Languages from "./pages/Languages";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
// import { Suspense, lazy } from "react";

// const Homepage = lazy(() => import("./pages/Homepage"));
// const Infos = lazy(() => import("./pages/Infos"));
// const Experiences = lazy(() => import("./pages/Experiences"));
// const Languages = lazy(() => import("./pages/Languages"));
// const Projects = lazy(() => import("./pages/Projects"));
// const Project = lazy(() => import("./pages/Project"));
// const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="infos" element={<Infos />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="languages" element={<Languages />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:projectId" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
