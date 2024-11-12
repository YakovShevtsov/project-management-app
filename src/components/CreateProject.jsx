import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function CreateProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave() {
    let projectTitle = title.current.value.trim();
    let projectDescription = description.current.value.trim();
    let projectDate = date.current.value;

    if (
      projectTitle.length === 0 ||
      projectDescription.length === 0 ||
      projectDate.length === 0
    ) {
      modal.current.open();
      return;
    }

    onAdd(projectTitle, projectDescription, projectDate);
    projectTitle = "";
    projectDescription = "";
    projectDate = "";
  }

  return (
    <div className="w-[35rem] mt-16">
      <Modal
        ref={modal}
        buttonCaption="Close"
      >
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-400 mb-4">
          Please make you're entered all the fields!
        </p>
      </Modal>
      <menu className="flex items-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>
      <Input
        label="Title"
        ref={title}
        type="text"
        id="title"
      />
      <Input
        label="Description"
        ref={description}
        textarea
        id="description"
      />
      <Input
        label="Date"
        ref={date}
        type="date"
        id="date"
      />
    </div>
  );
}
