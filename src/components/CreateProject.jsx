import { useRef } from "react";
import Input from "./Input";

export default function CreateProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    onAdd(title.current.value, description.current.value, date.current.value);
    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  }

  return (
    <div className="w-[35rem] mt-16">
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
