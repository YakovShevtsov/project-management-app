export default function Aside({ projectsList, onStartCreating, onSelect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <button
        onClick={onStartCreating}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add project
      </button>
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
