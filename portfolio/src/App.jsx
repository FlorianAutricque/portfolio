import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Infos from "./pages/Infos";
import Experiences from "./pages/Experiences";
import Languages from "./pages/Languages";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import PageNav from "./components/PageNav";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkmode => !prevDarkmode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <>
      <BrowserRouter>
        <PageNav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="infos" element={<Infos />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="languages" element={<Languages />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </>
  );
}

export default App;
