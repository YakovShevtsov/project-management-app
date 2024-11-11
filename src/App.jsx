import { useState } from "react";
import Aside from "./components/Aside";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";

function App() {
  const [projectsList, setProjectsList] = useState({
    projects: [],
    selectedProjectId: undefined,
  });

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

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside projectsList={projectsList} />
      <CreateProject onAdd={handleCreateProject} />
      {/* <NoProjectSelected /> */}
    </main>
  );
}

export default App;
