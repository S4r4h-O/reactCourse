export default function NewTask() {
  return (
    <div className="flex items-center gap-4">
      <input type="text" className="input w-64 px-2 py-1" />
      <button className="btn btn-success">Add task</button>
    </div>
  );
}
