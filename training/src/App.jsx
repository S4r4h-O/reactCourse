import { useState, useEffect, useRef } from "react";
import Input from "./components/Input";

const userData = {
  name: "",
  email: "",
  age: "",
};

function App() {
  const [isInvalid, setIsInvalid] = useState(false);
  const userName = useRef();
  const userEmail = useRef();
  const userAge = useRef();

  function handleSave() {
    const name = userName.current.value;
    const email = userEmail.current.value;
    const age = userAge.current.value;

    if (name.trim() && email.trim() && age.trim()) {
      userData.name = name;
      userData.email = email;
      userData.age = age;
      setIsInvalid(false)
      console.log(userData);
    } else setIsInvalid(true); console.log("Erro");
  }

  function handleFocus(ref) {
    ref.current.focus()
  }

  return (
    <div className="flex flex-col">
      <Input onRef={userName} placeholder="Name" isInvalid={isInvalid} />
      <Input
        onRef={userEmail}
        placeholder="Email"
        type="email"
        isInvalid={isInvalid}
      />
      <Input
        onRef={userAge}
        placeholder="Age"
        type="number"
        isInvalid={isInvalid}
      />
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-primary" onClick={()=>handleFocus(userEmail)}>Focus</button>
    </div>
  );
}

export default App;
