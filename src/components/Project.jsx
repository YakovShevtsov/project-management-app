import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function Project({
  onGetSelectedProject,
  onDelete,
  onAddTask,
  onDeleteTask,
}) {
  const input = useRef();
  const modal = useRef();

  const selectedProject = onGetSelectedProject();
  const formattedDate = new Date(selectedProject.date).toLocaleDateString(
    "ru-RU",
    { day: "2-digit", month: "2-digit", year: "numeric" }
  );

  function handleCreateTask() {
    const taskTitle = input.current.value.trim();

    if (taskTitle.length === 0) {
      modal.current.open();
      return;
    }

    onAddTask(taskTitle);
    input.current.value = "";
  }

  return (
    <div className="w-[35rem] mt-16">
      <Modal
        ref={modal}
        buttonCaption="Close"
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-400 mb-4">
          Please make sure there is no empty fields!
        </p>
      </Modal>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
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
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
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
      {selectedProject.tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {selectedProject.tasks.map((task) => (
            <li
              className="flex justify-between my-4"
              key={task.id}
            >
              {task.title}
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-700">
          This project doesn't have any tasks yet
        </p>
      )}
    </div>
  );
}
