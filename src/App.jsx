import { useState } from "react";
import Aside from "./components/Aside";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function App() {
  const [projectsList, setProjectsList] = useState({
    projects: [],
    selectedProjectId: undefined,
  });

  let content = <NoProjectSelected onStartCreating={handleStartCreating} />;

  if (projectsList.selectedProjectId === null) {
    content = (
      <CreateProject
        onStopCreating={handleStopCreating}
        onAdd={handleCreateProject}
      />
    );
  } else if (projectsList.selectedProjectId) {
    content = (
      <Project
        onDelete={handleDeleteProject}
        onGetSelectedProject={getSelectedProject}
      />
    );
  }

  function getSelectedProject() {
    let selectedProject;
    projectsList.projects.map((project) => {
      if (project.id === projectsList.selectedProjectId) {
        selectedProject = project;
      }
    });
    return selectedProject;
  }

  function handleCreateProject(projectTitle, projectDescription, projectDate) {
    setProjectsList((prevProjectList) => {
      const projectId = Math.random();

      return {
        projects: [
          ...prevProjectList.projects,
          {
            title: projectTitle,
            description: projectDescription,
            date: projectDate,
            id: projectId,
          },
        ],
        selectedProjectId: projectId,
      };
    });
  }

  function handleStartCreating() {
    setProjectsList((prevProjectList) => {
      return {
        projects: [...prevProjectList.projects],
        selectedProjectId: null,
      };
    });
  }

  function handleStopCreating() {
    setProjectsList((prevProjectList) => {
      return {
        projects: [...prevProjectList.projects],
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(selectingProjectId) {
    setProjectsList((prevProjectList) => {
      return {
        projects: [...prevProjectList.projects],
        selectedProjectId: selectingProjectId,
      };
    });
  }

  function handleDeleteProject(deletingProjectId) {
    setProjectsList((prevProjectList) => {
      const updatedProjectsList = prevProjectList.projects.filter(
        (project) => project.id !== deletingProjectId
      );

      return {
        projects: [...updatedProjectsList],
        selectedProjectId: undefined,
      };
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside
        projectsList={projectsList}
        onStartCreating={handleStartCreating}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
