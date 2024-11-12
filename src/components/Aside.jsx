import Button from "./Button";

export default function Aside({ projectsList, onStartCreating, onSelect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <Button onClick={onStartCreating}>+ Add project</Button>
      <ul className="mt-8">
        {projectsList.projects.map((project) => (
          <li key={project.id}>
            <button
              className={`w-full text-left px-2 py-1 rounded-sm my-1 ${
                project.id === projectsList.selectedProjectId
                  ? "bg-stone-800"
                  : undefined
              } hover:text-stone-200 hover:bg-stone-800`}
              onClick={() => onSelect(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
