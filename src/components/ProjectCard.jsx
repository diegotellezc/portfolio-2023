import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto">
      <img
        onClick={() => handleModalInfo(project)}
        src={project.src}
        alt="project card"
        className="rounded-md duration-200 hover:scale-105 cursor-pointer"
      />
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleClickDemo(project.demo)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Demo
        </button>
        <button
          onClick={() => handleClickCode(project.code)}
          className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125"
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
