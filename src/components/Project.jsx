import Input from "./Input";
import { useRef } from "react";

export default function Project({ onGetSelectedProject, onDelete, onAddTask }) {
  const input = useRef();
  const selectedProject = onGetSelectedProject();

  function handleCreateTask() {
    onAddTask(input.current.value);
    input.current.value = "";
  }

  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {selectedProject.title}
        </h1>
        <button
          className="text-stone-600 hover:text-stone-950"
          onClick={() => onDelete(selectedProject.id)}
        >
          Delete
        </button>
      </div>
      <p className="mb-4 text-stone-400">{selectedProject.date}</p>
      <p className="text-stone-600 whitespace-pre-wrap">
        {selectedProject.description}
      </p>
      <hr />
      <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          ref={input}
        />
        <button
          className="text-stone-600 hover:text-stone-950"
          onClick={handleCreateTask}
        >
          Add task
        </button>
      </div>
      <ul>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {selectedProject.tasks.map((task) => (
            <li
              className="flex justify-between my-4"
              key={task.selectedProjectId}
            >
              {task.title}
              <button className="text-stone-700 hover:text-red-500">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
