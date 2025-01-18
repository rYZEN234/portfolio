import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="NetFlix Landing Page"
          main="Designed and launched a fully responsive Netflix landing page utilizing Bootstrap grid, achieving seamless layout across devices while incorporating an innovative login section that increased user engagement"
          demoLink="https://ryzen234.github.io/CodeClauseInternship_netflixlandingPage/"
          sourceCodeLink="https://github.com/rYZEN234/CodeClauseInternship_netflixlandingPage"
        />
        <ProjectCard
          title="Code-Sync- A Realtime Collaboration"
          main="CodeSync is a real-time collaborative coding platform built using the MERN stack. It enables multiple users to write, edit, and debug code simultaneously in a shared environment with live updates."
          demoLink="https://code-sync-client-zwat.onrender.com/editor/31ea7217-7332-472d-b1c6-284591f8035d" // Replace with your demo link
          sourceCodeLink="https://github.com/rYZEN234/Code-Sync" 
        />
        <ProjectCard
          title="ToDO APP"
          main="Built a potent and responsive ToDo App using React.js for efficient state management and interactive user interfaces. Styled with Tailwind CSS, leveraging utility-first principles for fast and consistent UI development."
          demoLink="https://todo-ten-plum.vercel.app/" 
          sourceCodeLink="https://github.com/rYZEN234/Todo" 
        />
      </div>
    </div>
  );
};

export default Projects;
