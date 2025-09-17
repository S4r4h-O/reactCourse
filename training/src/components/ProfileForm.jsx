function ProfileForm({ userInput, onChangeAction }) {
  return (
    <div className="flex flex-col">
      <label className="label">Name</label>
      <input
        className="input mb-2"
        type="text"
        value={userInput.name}
        onChange={(e) => onChangeAction("name", e.target.value)}
      />

      <label className="label">Email</label>
      <input
        className="input mb-2"
        type="email"
        value={userInput.email}
        onChange={(e) => onChangeAction("email", e.target.value)}
      />

      <label className="label">Age</label>
      <input
        className="input mb-2"
        type="number"
        value={userInput.age}
        onChange={(e) => onChangeAction("age", e.target.value)}
      />
    </div>
  );
}

export default ProfileForm;
