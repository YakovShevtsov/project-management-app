import { useState } from "react";
import Aside from "./components/Aside";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/CreateProject";

function App() {
  const [projectsList, setProjectsList] = useState({
    projects: [],
    selectedProject: undefined,
  });

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside />
      <CreateProject />
      {/* <NoProjectSelected /> */}
    </main>
  );
}

export default App;
