import { useReducer } from "react";
import Aside from "./components/Aside";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";
import Project from "./components/Project";

function projectsReducer(state, action) {
  switch (action.type) {
    case "CREATE_PROJECT": {
      const projectId = Date.now() + Math.random();

      return {
        projects: [
          ...state.projects,
          {
            title: action.payload.projectTitle,
            description: action.payload.projectDescription,
            date: action.payload.projectDate,
            id: projectId,
            tasks: [],
          },
        ],
        selectedProjectId: projectId,
      };
    }

    case "START_CREATING": {
      return {
        ...state,
        selectedProjectId: null,
      };
    }

    case "STOP_CREATING": {
      return {
        ...state,
        selectedProjectId: undefined,
      };
    }

    case "SELECT_PROJECT": {
      return {
        ...state,
        selectedProjectId: action.payload,
      };
    }

    case "DELETE_PROJECT": {
      const updatedProjectsList = state.projects.filter(
        (project) => project.id !== action.payload
      );

      return {
        projects: updatedProjectsList,
        selectedProjectId: undefined,
      };
    }

    case "ADD_TASK_TO_PROJECT": {
      const task = {
        title: action.payload,
        id: Date.now() + Math.random(),
      };

      const updatedProjectsList = state.projects.map((project) => {
        if (project.id === state.selectedProjectId) {
          return {
            ...project,
            tasks: [...project.tasks, task],
          };
        }
        return project;
      });

      return {
        projects: updatedProjectsList,
        selectedProjectId: state.selectedProjectId,
      };
    }

    case "DELETE_TASK_FROM_PROJECT": {
      const updatedProjectsList = state.projects.map((project) => {
        if (project.id === state.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== action.payload),
          };
        }
        return project;
      });

      return {
        projects: updatedProjectsList,
        selectedProjectId: state.selectedProjectId,
      };
    }

    default:
      return state;
  }
}

function App() {
  const [projects, dispatchProjects] = useReducer(projectsReducer, {
    projects: [],
    selectedProjectId: undefined,
  });

  let content = <NoProjectSelected onStartCreating={handleStartCreating} />;

  if (projects.selectedProjectId === null) {
    content = (
      <CreateProject
        onStopCreating={handleStopCreating}
        onAdd={handleCreateProject}
      />
    );
  } else if (projects.selectedProjectId) {
    content = (
      <Project
        onDelete={handleDeleteProject}
        onGetSelectedProject={getSelectedProject}
        onAddTask={handleAddTaskToProject}
        onDeleteTask={handleDeleteTaskFromProject}
      />
    );
  }

  function getSelectedProject() {
    const selectedProject = projects.projects.find(
      (project) => project.id === projects.selectedProjectId
    );
    return selectedProject;
  }

  function handleCreateProject(projectTitle, projectDescription, projectDate) {
    dispatchProjects({
      type: "CREATE_PROJECT",
      payload: { projectTitle, projectDescription, projectDate },
    });
  }

  function handleStartCreating() {
    dispatchProjects({
      type: "START_CREATING",
    });
  }

  function handleStopCreating() {
    dispatchProjects({
      type: "STOP_CREATING",
    });
  }

  function handleSelectProject(selectingProjectId) {
    dispatchProjects({
      type: "SELECT_PROJECT",
      payload: selectingProjectId,
    });
  }

  function handleDeleteProject(deletingProjectId) {
    dispatchProjects({
      type: "DELETE_PROJECT",
      payload: deletingProjectId,
    });
  }

  function handleAddTaskToProject(taskName) {
    dispatchProjects({
      type: "ADD_TASK_TO_PROJECT",
      payload: taskName,
    });
  }

  function handleDeleteTaskFromProject(taskId) {
    dispatchProjects({
      type: "DELETE_TASK_FROM_PROJECT",
      payload: taskId,
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside
        projectsList={projects}
        onStartCreating={handleStartCreating}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
