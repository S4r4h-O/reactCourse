import NoProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectImage}
        alt="An empty task list"
      />
      <h1 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p>
        <button className="btn btn-primary" onClick={onStartAddProject}>
          Create new project
        </button>
      </p>
    </div>
  );
}
