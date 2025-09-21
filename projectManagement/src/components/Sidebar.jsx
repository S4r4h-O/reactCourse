export default function Sidebar({ projects, onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="font-bold mb-8 uppercase md:text-xl text-stone-200">
        Your projects
      </h1>
      <button
        className="btn btn-ghost text-lg bg-stone-700"
        onClick={onStartAddProject}
      >
        + Add Project
      </button>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
