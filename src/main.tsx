import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar.tsx";
import Introduce from "./Introduce.tsx";
import University from "./School.tsx";
import Landing from "./Landing.tsx";
import BackToTop from "./BackToTopButton.tsx";
import Skills from "./Skills.tsx";
import Contactme from "./Contact.tsx";
import Experience from "./Experience.tsx";
import More from "./More.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex cursor-default select-none flex-col items-center justify-center overflow-hidden">
      <NavBar />
      <Landing />
      <Introduce />
      <University />
      <Skills />
      <Contactme />
      <Experience />
      <More />
      <BackToTop />
    </div>
  </StrictMode>
);
