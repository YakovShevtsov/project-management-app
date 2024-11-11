import Input from "./Input";

export default function Project({ title, description, date, tasks }) {
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          Project title
        </h1>
        <button className="text-stone-600 hover:text-stone-950">Delete</button>
      </div>
      <p className="mb-4 text-stone-400">Date</p>
      <p className="text-stone-600 whitespace-pre-wrap">Text</p>
      <hr />
      <div></div>
      <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
      <div className="flex items-center gap-4">
        <Input type="text" />
        <button className="text-stone-600 hover:text-stone-950">
          Add task
        </button>
      </div>
    </div>
  );
}
