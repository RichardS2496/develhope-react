import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleUsernameChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input type="input" value={name} onChange={handleUsernameChange} />
      <Welcome name={name} />
    </>
  );
}
