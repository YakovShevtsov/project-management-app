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
    content = <CreateProject onAdd={handleCreateProject} />;
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

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside projectsList={projectsList} onStartCreating={handleStartCreating} />
      {content}
    </main>
  );
}

export default App;
