import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="stroke-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li className="flex justify-between my-4" key={task.id}>
              <span>{task.text}</span>
              <button className="btn btn-error">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
