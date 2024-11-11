import noProjectsImg from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectsImg}
        alt="Book with a pen"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project, or get started with a new one
      </p>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        Create new project
      </button>
    </div>
  );
}
